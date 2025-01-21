import React, { useState } from "react";
import { fetchCryptoData, fetchExchangeRates } from "./services/api";
import SearchBar from "./components/SearchBar";
import PriceDisplay from "./components/PriceDisplay";
import PriceChart from "./components/PriceChart";

const App = () => {
  const [data, setData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const cryptoData = await fetchCryptoData(query);
      const exchangeRates = await fetchExchangeRates();
      const targetCurrency = "EUR"; // Change this to your desired currency

      const convertedPriceHistory = cryptoData[0].sparkline_in_7d.price.map(
        (price, index) => ({
          date: `Day ${index + 1}`,
          price: price * exchangeRates[targetCurrency],
        })
      );

      setData(cryptoData);
      setPriceHistory(convertedPriceHistory);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setData(null); // Clear any previous data
      setPriceHistory([]); // Clear any previous price history
    }
  };

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {data && <PriceDisplay data={data[0]} />}
      {priceHistory.length > 0 && <PriceChart prices={priceHistory} />}
    </div>
  );
};

export default App;
