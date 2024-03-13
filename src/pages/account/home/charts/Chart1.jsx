import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    days: 4000,
    amt: 0,
  },
  {
    name: "Tue",
    days: 3000,
    amt: 6000,
  },
  {
    name: "Wed",
    days: 2000,
    amt: 20000,
  },
  {
    name: "Thur",
    days: 2780,

    amt: 30000,
  },
  {
    name: "Fri",
    days: 1890,
    amt: 40000,
  },
];

function Chart1() {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" stroke="black" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="days" stroke="#18A0FB" />
      </LineChart>
    </div>
  );
}

export default Chart1;
