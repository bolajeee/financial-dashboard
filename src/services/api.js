import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coincap.io/v2",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchCryptoData = async (query) => {
  const { data } = await api.get(`/assets/${query}`);
  return [
    {
      name: data.data.name,
      current_price: parseFloat(data.data.priceUsd),
      price_change_percentage_24h: parseFloat(data.data.changePercent24Hr),
      market_cap: parseFloat(data.data.marketCapUsd),
      id: data.data.id,
    },
  ];
};

export const fetchPriceHistory = async (coinId, timeFrame = "1") => {
  const interval = timeFrame === "1" ? "h1" : "d1";
  const { data } = await api.get(
    `/assets/${coinId}/history?interval=${interval}`
  );
  return data.data.map((point) => ({
    date: new Date(point.time).toLocaleDateString(),
    price: parseFloat(point.priceUsd),
  }));
};

export const fetchExchangeRates = async () => {
  const { data } = await api.get("/rates");
  const rates = {};
  data.data.forEach((rate) => {
    if (rate.type === "fiat") {
      rates[rate.symbol] = parseFloat(rate.rateUsd);
    }
  });
  return rates;
};
