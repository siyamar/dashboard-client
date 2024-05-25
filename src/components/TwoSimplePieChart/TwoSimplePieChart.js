"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, } from 'recharts';

const TwoSimplePieChart = () => {
    const groupChart = [
        { "name": "Group A", "value": 250 },
        { "name": "Group B", "value": 500 },
        { "name": "Group C", "value": 300 },
        { "name": "Group D", "value": 200 },
        { "name": "Group E", "value": 400 }
      ];
    return (
        <>
        <PieChart width={300} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={groupChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label = "group"
          />
          <Tooltip />
        </PieChart>
        </>
    );
};

export default TwoSimplePieChart;