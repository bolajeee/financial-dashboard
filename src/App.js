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
`;



function App() {
  const [currencies, setCurrencies] = React.useState(null);
  const [selectedCurrency, setSelectedCurrency] = React.useState('USD');

  React.useEffect(() => {
    setTimeout(() => {
      setCurrencies({ USD: 'US Dollar', EUR: 'Euro' });
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Financial Dashboard</h1>
        </Header>
        <CurrencySelector  selectedCurrency={selectedCurrency}
      onCurrencyChange={setSelectedCurrency}
      currencies={currencies}/>
        <ComparisonChart />
        <SearchBar />
        <PriceDisplay />
        <PriceChart />
        <ExchangeRates />
      </Container>
    </ThemeProvider>
  );
}

export default App;