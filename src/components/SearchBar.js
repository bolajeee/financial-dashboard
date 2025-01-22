import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  flex: 1;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PopularCoins = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoinTag = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const popularCryptos = [
  { name: "Bitcoin", id: "bitcoin" },
  { name: "Ethereum", id: "ethereum" },
  { name: "Cardano", id: "cardano" },
  { name: "Solana", id: "solana" },
  { name: "Dogecoin", id: "dogecoin" },
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.toLowerCase());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for cryptocurrency..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchWrapper>
      <PopularCoins>
        {popularCryptos.map((crypto) => (
          <CoinTag
            key={crypto.id}
            onClick={() => {
              setQuery(crypto.name);
              onSearch(crypto.id);
            }}
          >
            {crypto.name}
          </CoinTag>
        ))}
      </PopularCoins>
    </SearchContainer>
  );
};

export default SearchBar;
