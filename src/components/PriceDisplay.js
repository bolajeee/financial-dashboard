// filepath: /C:/Users/user/Documents/financial-dashboard/src/components/PriceDisplay.js
import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PriceDisplay = ({ data }) => {
  return (
    <DisplayContainer>
      <h2>{data.name}</h2>
      <p>Current Price: ${data.current_price}</p>
      <p>24-hour Change: {data.price_change_percentage_24h}%</p>
      <p>Market Cap: ${data.market_cap}</p>
      <p>Trading Volume: ${data.total_volume}</p>
    </DisplayContainer>
  );
};

export default PriceDisplay;
