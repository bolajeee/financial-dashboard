(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) --ignore-case refs/heads/main refs/remotes/main [227ms]
2025-01-22 12:23:43.064 [warning] [Git][revParse] Unable to read file: ENOENT: no such file or directory, open 'c:\Users\Hp\bolajeee\financial-dashboard\.git\refs\remotes\origin\main'
2025-01-22 12:23:43.191 [info] > git rev-parse refs/remotes/origin/main [127ms]
2025-01-22 12:23:43.347 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [143ms]
2025-01-22 12:23:43.348 [info] > git status -z -uall [151ms]import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './theme/ThemeProvider';
import CurrencySelector from './components/CurrencySelector';
import ComparisonChart from './components/ComparisonChart';
import SearchBar from './components/SearchBar';
import PriceDisplay from './components/PriceDisplay';
import PriceChart from './components/PriceChart';
import ExchangeRates from './components/ExchangeRates';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.theme.border};
  }
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  font-weight: 500;
  text-align: center;
`;


const App = () => {
 
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Financial Dashboard</h1>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </ThemeToggle>
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
            currencies={exchangeRates}
          />
        </Header>
        <SearchBar onSearch={handleSearch} disabled={isLoading} />
        {isLoading && <p>Loading...</p>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {data && <PriceDisplay data={data[0]} />}
        {priceHistory.length > 0 && <PriceChart prices={priceHistory} />}
        {Object.keys(exchangeRates).length > 0 && (
          <ExchangeRates rates={exchangeRates} />
        )}
        {comparisonData.length > 0 && (
          <ComparisonChart datasets={comparisonData} />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
