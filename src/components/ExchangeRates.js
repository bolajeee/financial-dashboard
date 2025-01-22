import React from "react";
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;

const RateCard = styled.div`
  min-width: 200px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CurrencyName = styled.h3`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const RateValue = styled.p`
  font-size: 1.2em;
  color: #34495e;
  font-weight: 500;
`;

const ExchangeRates = ({ rates }) => {
  return (
    <CarouselContainer>
      {Object.entries(rates).map(([currency, rate]) => (
        <RateCard key={currency}>
          <CurrencyName>{currency}</CurrencyName>
          <RateValue>{rate.toFixed(4)}</RateValue>
        </RateCard>
      ))}
    </CarouselContainer>
  );
};

export default ExchangeRates;