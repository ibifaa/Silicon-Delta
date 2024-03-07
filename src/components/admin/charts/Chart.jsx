import React from "react";

import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { PureComponent } from "react";
import chartData from "./chartData";

function Chart() {
  return (
    <div className="chart-container">
      <BarChart
        width={400} // Initial width (can be any value)
        height={200} // Initial height (can be any value)
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* Your chart components */}
        <XAxis dataKey="days" />
        <YAxis />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="present" fill="black" />
        <Bar dataKey="absent" fill="red" />
      </BarChart>
    </div>
  );
}

export default Chart;
