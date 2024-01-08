import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'block A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'block B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'block C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'block D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'block E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'block F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'block G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Barchart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="red" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="skyblue" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
