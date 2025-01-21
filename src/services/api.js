import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const CRYPTO_API_URL = "https://api.coingecko.com/api/v3";
const STOCK_API_URL =
    "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=s9mdcJhA9bkDuzlXYwUdnV_rdOuzwqSE";
const EXCHANGE_RATE_API_URL =
  "https://v6.exchangerate-api.com/v6/3ffdd12e8ee730625a99b4bd/latest/USD";
   
const ALPHA_VANTAGE_KEY = process.env.ALPHA_VANTAGE_KEY;

// Fetch cryptocurrency data
export const fetchCryptoData = async (query) => {
  try {
    const response = await axios.get(`${CRYPTO_API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        ids: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    throw error;
  }
};

// Fetch stock data
export const fetchStockData = async (ticker) => {
  try {
    const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09`, {
      params: {
        apiKey: ALPHA_VANTAGE_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

// Fetch data from Alpha Vantage
export const fetchAlphaVantageData = async (symbol) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: "TIME_SERIES_DAILY",
            symbol: symbol,
        interval: "5min",
        apikey: ALPHA_VANTAGE_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Alpha Vantage data:", error);
    throw error;
  }
};

// Fetch exchange rates
export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(EXCHANGE_RATE_API_URL);
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};



