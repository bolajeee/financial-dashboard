
import axios from "axios";



const CRYPTO_API_URL = "https://api.coingecko.com/api/v3";
const EXCHANGE_RATE_API_URL =
  "https://v6.exchangerate-api.com/v6/3ffdd12e8ee730625a99b4bd/latest/USD"; 

  const COINGECKO_API_KEY = "CG-FtKXdVtrDRiR26MBKEvj1mYN"


// Fetch cryptocurrency data
export const fetchCryptoData = async (query) => {
  try {
    const response = await axios.get(`${CRYPTO_API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        ids: query,
      },
      headers: {
        Authorization: `Bearer ${COINGECKO_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
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
