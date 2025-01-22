import React from "react";
import styled from "styled-components";

const TimeFrameContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TimeButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ active, theme }) =>
    active ? theme.primary : theme.background};
  color: ${({ active, theme }) => (active ? "white" : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.primary : theme.border};
  }
`;

const timeFrames = [
  { label: "24H", value: "1" },
  { label: "7D", value: "7" },
  { label: "1M", value: "30" },
  { label: "3M", value: "90" },
  { label: "1Y", value: "365" },
];

const TimeFrameSelector = ({ selectedTimeFrame, onTimeFrameChange }) => {
  return (
    <TimeFrameContainer>
      {timeFrames.map(({ label, value }) => (
        <TimeButton
          key={value}
          active={selectedTimeFrame === value}
          onClick={() => onTimeFrameChange(value)}
        >
          {label}
        </TimeButton>
      ))}
    </TimeFrameContainer>
  );
};

export default TimeFrameSelector;
