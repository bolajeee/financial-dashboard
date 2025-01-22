import React from "react";
import styled from "styled-components";

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

  @media (max-width: 600px) {
    min-width: 150px;
    padding: 15px;
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

const ExchangeRates = ({ rates = {} }) => {
  if (Object.keys(rates).length === 0) {
    return <p>No exchange rates available.</p>;
  }

  return (
    <CarouselContainer>
      {Object.entries(rates).map(([currency, rate]) => (
        <RateCard key={currency}>
          <CurrencyName>{currency}</CurrencyName>
          <RateValue>{typeof rate === "number" ? rate.toFixed(4) : "N/A"}</RateValue>
        </RateCard>
      ))}
    </CarouselContainer>
  );
};

export default ExchangeRates;
