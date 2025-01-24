import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./theme/ThemeProvider";
import CurrencySelector from "./components/CurrencySelector";
import SearchBar from "./components/SearchBar";
import PriceDisplay from "./components/PriceDisplay";
import PriceChart from "./components/PriceChart";
import ExchangeRates from "./components/ExchangeRates";
import ThemeToggle from "./components/ThemeToggle";
import TimeFrameSelector from "./components/TimeFrameSelector";
import {
  fetchCryptoData,
  fetchPriceHistory,
  fetchExchangeRates,
} from "./services/api";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LoadingSpinner = styled.div`
  /* Add your loading spinner styles here */
`;

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [cryptoData, setCryptoData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [timeFrame, setTimeFrame] = useState("1");

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const data = await fetchCryptoData(query);
      setCryptoData(data[0]);
      const history = await fetchPriceHistory(data[0].id);
      setPriceHistory(history);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadExchangeRates = async () => {
      try {
        const rates = await fetchExchangeRates();
        setExchangeRates(rates);
        setCurrencies(rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    loadExchangeRates();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTimeFrameChange = async (newTimeFrame) => {
    setTimeFrame(newTimeFrame);
    if (cryptoData) {
      try {
        setLoading(true);
        const history = await fetchPriceHistory(cryptoData.id, newTimeFrame);
        setPriceHistory(history);
      } catch (error) {
        console.error("Error fetching price history:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Crypto Dashboard</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              currencies={currencies}
            />
          </div>
        </Header>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {cryptoData && <PriceDisplay data={cryptoData} />}
            {priceHistory.length > 0 && (
              <>
                <TimeFrameSelector
                  selectedTimeFrame={timeFrame}
                  onTimeFrameChange={handleTimeFrameChange}
                />
                <PriceChart prices={priceHistory} />
              </>
            )}
            <ExchangeRates rates={exchangeRates} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
