// filepath: /C:/Users/user/Documents/financial-dashboard/src/components/PriceChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const PriceChart = ({ prices }) => {
  const data = {
    labels: prices.map((price) => price.date),
    datasets: [
      {
        label: "Price",
        data: prices.map((price) => price.price),
        fill: false,
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  };

  return (
    <ChartContainer>
      <Line data={data} />
    </ChartContainer>
  );
};

export default PriceChart;
