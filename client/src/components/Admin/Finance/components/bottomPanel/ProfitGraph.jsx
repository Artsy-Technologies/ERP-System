// src/ProfitChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProfitChart = () => {
  // Dummy data for the chart
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Earnings',
        data: [100, 200, 150, 510, 400, 300, 200],
        borderColor: '#3b82f6', // Blue line color
        backgroundColor: 'rgba(59, 130, 246, 0.1)', // Blue area color
        fill: true,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: '#ff7f00', // Orange point color
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointRadius: 4,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#ff7f00',
      },
      {
        label: 'Previous Week',
        data: [80, 150, 120, 250, 300, 180, 100],
        borderColor: '#94a3b8', // Gray line color
        backgroundColor: 'rgba(148, 163, 184, 0.1)', // Gray area color
        fill: true,
        tension: 0.4,
        borderDash: [5, 5], // Dashed line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)', // Light gray grid lines
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="" style={{ borderRadius: '15px' , width:"50%" , padding:'1rem' , boxShadow:"0px 16px 24px 0px #0000000F",height:"min-content",border:"1px solid #C1C1C1" , marginTop:"1rem"}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-primary">Profit Graph</h5>
        <select className="form-select w-auto">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div style={{ height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfitChart;
