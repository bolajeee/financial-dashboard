import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  h3 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.3em;
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 2em;
  margin-bottom: 20px;
`;

const PriceDisplay = ({ data }) => {
  if (!data) return null;

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <DisplayContainer>
      <Title>{data.name}</Title>
      <StatsGrid>
        <StatCard>
          <h3>Current Price</h3>
          <p>{formatNumber(data.current_price)}</p>
        </StatCard>
        <StatCard>
          <h3>24h Change</h3>
          <p
            style={{
              color:
                data.price_change_percentage_24h >= 0
                  ? ({ theme }) => theme.success
                  : ({ theme }) => theme.error,
            }}
          >
            {data.price_change_percentage_24h?.toFixed(2)}%
          </p>
        </StatCard>
        <StatCard>
          <h3>Market Cap</h3>
          <p>{formatNumber(data.market_cap)}</p>
        </StatCard>
      </StatsGrid>
    </DisplayContainer>
  );
};

export default PriceDisplay;
