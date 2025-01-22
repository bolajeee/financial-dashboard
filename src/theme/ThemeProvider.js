import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F8FAFC",
  text: "#1E293B",
  primary: "#2563EB",
  secondary: "#64748B",
  background: "#FFFFFF",
  cardBg: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
  border: "#E2E8F0",
  shadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  success: "#16A34A",
  error: "#DC2626",
};

export const darkTheme = {
  body: "#0F172A",
  text: "#F8FAFC",
  primary: "#3B82F6",
  secondary: "#CBD5E1",
  background: "#1E293B",
  cardBg: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
  border: "#334155",
  shadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  success: "#22C55E",
  error: "#EF4444",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;
