import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  text: '#2c3e50',
  cardBg: '#ffffff',
  border: '#ddd',
  chartLine: '#2c3e50',
  shadow: 'rgba(0, 0, 0, 0.1)'
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  cardBg: '#2d2d2d',
  border: '#444',
  chartLine: '#61dafb',
  shadow: 'rgba(0, 0, 0, 0.3)'
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
`;
