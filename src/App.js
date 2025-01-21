import React, { useState, useCallback } from "react";
import { fetchCryptoData, fetchExchangeRates } from "./services/api";
import SearchBar from "./components/SearchBar";
import PriceDisplay from "./components/PriceDisplay";
import PriceChart from "./components/PriceChart";
import ExchangeRates from "./components/ExchangeRates";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  font-weight: 500;
  text-align: center;
`;

const DEFAULT_CURRENCY = "EUR";

const App = () => {
  const [data, setData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const convertPriceHistory = useCallback((sparklineData, rates) => {
    return sparklineData.map((price, index) => ({
      date: `Day ${index + 1}`,
      price: price * rates[DEFAULT_CURRENCY],
    }));
  }, []);

  const resetState = useCallback(() => {
    setData(null);
    setPriceHistory([]);
    setExchangeRates({});
  }, []);

  const handleSearch = useCallback(async (query) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const [cryptoData, rates] = await Promise.all([
        fetchCryptoData(query),
        fetchExchangeRates()
      ]);

      if (cryptoData?.[0]) {
        const sparklineData = cryptoData[0].sparkline_in_7d?.price;
        
        if (sparklineData) {
          const convertedPriceHistory = convertPriceHistory(sparklineData, rates);
          setPriceHistory(convertedPriceHistory);
        }

        setData(cryptoData);
        setExchangeRates(rates);
      } else {
        throw new Error("No data available for the selected cryptocurrency.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Error fetching data. Please try again.");
      resetState();
    } finally {
      setIsLoading(false);
    }
  }, [convertPriceHistory, resetState]);

  return (
    <Container>
      <GlobalStyle />
      <h1>Financial Dashboard</h1>
      <SearchBar onSearch={handleSearch} disabled={isLoading} />
      {isLoading && <p>Loading...</p>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {data && <PriceDisplay data={data[0]} />}
      {priceHistory.length > 0 && <PriceChart prices={priceHistory} />}
      {Object.keys(exchangeRates).length > 0 && (
        <ExchangeRates rates={exchangeRates} />
      )}
    </Container>
  );
};

export default App;
