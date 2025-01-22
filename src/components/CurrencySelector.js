import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: white;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
`;

const CurrencySelector = ({ selectedCurrency, onCurrencyChange, currencies = {} }) => {
  // Ensure currencies is a valid object
  const currencyKeys = currencies && typeof currencies === 'object' ? Object.keys(currencies) : [];

  return (
    <Select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
      {currencyKeys.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </Select>
  );
};

export default CurrencySelector;
