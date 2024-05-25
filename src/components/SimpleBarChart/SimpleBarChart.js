"use client"
import { getOrders } from '@/utils/getOrders';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const SimpleBarChart = () => {
  const [orders, setOrders] = useState([]);
  const sortedOrders = [...orders].sort((a, b) => b.total_revenew_amount - a.total_revenew_amount);
  useEffect(() => {
    const fetchOrders = async () => {
        try {
            const ordersData = await getOrders();
            setOrders(ordersData);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    fetchOrders();
}, []);

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    return (
        <>
            <BarChart
      width={500}
      height={250}
      data={sortedOrders.slice(0, 6)}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="" />
      <YAxis />
      
      <Tooltip />
          <Legend />
      <Bar dataKey="total_revenew_amount" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {orders.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </>
    );
};

export default SimpleBarChart;
