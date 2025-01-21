import React from "react";
import styled from "styled-components";

const RatesContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ExchangeRates = ({ rates }) => {
  return (
    <RatesContainer>
      <h2>Exchange Rates</h2>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </RatesContainer>
  );
};

export default ExchangeRates;
