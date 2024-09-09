// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Request Received', 'In Progress', 'Completed'],
    datasets: [
      {
        label: 'Request Status',
        data: [
          data.requestReceived || 100,
          data.inProgress || 0,
          data.completed || 0,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart">
      <h2>Request Status Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
