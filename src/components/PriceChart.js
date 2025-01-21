import React from "react";
import { Line } from "react-chartjs-2";

const PriceChart = ({ prices }) => {
  const chartData = {
    labels: prices.map((point) => point.date),
    datasets: [
      {
        label: "Price Trend",
        data: prices.map((point) => point.price),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PriceChart;
