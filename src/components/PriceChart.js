
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`;

const PriceChart = ({ prices }) => {
  if (!prices?.length) return null;

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={prices}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
            stroke="#64748b"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={["auto", "auto"]}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
            stroke="#64748b"
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default PriceChart;
