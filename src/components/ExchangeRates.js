import React, { useRef } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RateCard = styled.div`
  min-width: 200px;
  padding: 20px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
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
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const RateValue = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  z-index: 1;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}

  @media (max-width: 768px) {
    display: none;
  }
`;

const ExchangeRates = ({ rates = {} }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (Object.keys(rates).length === 0) {
    return <p>No exchange rates available.</p>;
  }

  return (
    <CarouselContainer>
      <ScrollButton direction="left" onClick={() => scroll("left")}>
        ←
      </ScrollButton>
      <CarouselWrapper ref={scrollRef}>
        {Object.entries(rates).map(([currency, rate]) => (
          <RateCard key={currency}>
            <CurrencyName>{currency}</CurrencyName>
            <RateValue>
              {typeof rate === "number" ? rate.toFixed(4) : "N/A"}
            </RateValue>
          </RateCard>
        ))}
      </CarouselWrapper>
      <ScrollButton direction="right" onClick={() => scroll("right")}>
        →
      </ScrollButton>
    </CarouselContainer>
  );
};

export default ExchangeRates;
