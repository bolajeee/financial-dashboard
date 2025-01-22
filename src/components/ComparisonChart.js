import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: 20px 0;
  padding: 20px;
  background: ${props => props.theme.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 6px ${props => props.theme.shadow};
`;

const ComparisonChart = ({ datasets }) => {
  const colors = ['#2c3e50', '#e74c3c', '#2ecc71', '#f1c40f'];

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {datasets.map((dataset, index) => (
            <Line
              key={dataset.name}
              type="monotone"
              data={dataset.data}
              dataKey="price"
              name={dataset.name}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ComparisonChart;