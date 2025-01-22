// filepath: /C:/Users/user/Documents/financial-dashboard/src/components/PriceDisplay.js
import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  margin: 20px 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

const CryptoCard = styled.div`
  min-width: 280px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  p {
    margin: 10px 0;
    font-size: 1.1em;
    
    &.price {
      font-size: 1.4em;
      font-weight: bold;
      color: #2c3e50;
    }
    
    &.change {
      color: ${props => props.priceChange >= 0 ? '#2ecc71' : '#e74c3c'};
    }
  }
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
