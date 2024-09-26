import React, { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";
import "./ExpensesChart.css";

// Register the required components for the Line chart
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const ExpensesChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists to avoid canvas reuse error
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Expenses",
          data: [500, 700, 800, 1200, 900, 1400, 1500],
          backgroundColor: "rgba(106, 77, 243, 0.2)",
          borderColor: "#6a4df3",
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default ExpensesChart;
