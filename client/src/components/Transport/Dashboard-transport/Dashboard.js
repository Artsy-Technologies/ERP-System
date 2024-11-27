import React, { useState } from "react";

import DriversList from "../DriversList-transport/DriversList";
import VehiclesList from "../VehiclesList-transport/VechiclesList";
import TransactionHistory from "../TransactionHistory-transport/TransactionHistory";
import ExpensesChart from "../ExpensesChart-transport/ExpensesChart";
import Card from "../Card-transport/Card";
import "./Dashboard.css";

const Dashboard = () => {
  const [isDrivers, setIsDrivers] = useState(true);

  return (
    <div className="dashboard-container">
    <div className="cards-section">
        <Card 
          iconPath="/images/road.png" 
          
          number="99,002" 
          label="KM" 
        />
        <br></br>
        <Card 
          iconPath="/images/dollar.png" 
          number="10.8K" 
          label="Total Expense" 
        />
      </div>
      <div className="expenses-section">
        <h2>Total Expenses</h2>
        <ExpensesChart />
        <div className="expense-options">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
          <button>Year</button>
          <select>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
      </div>
      <div className="transaction-history-section">
      
      
      
        <TransactionHistory />
      </div>

      <div className="drivers-vehicles-section">
        <div className="tabs">
          <button 
            className={isDrivers ? "active" : ""} 
            onClick={() => setIsDrivers(true)}
          >
            Drivers
          </button>
          <button 
            className={!isDrivers ? "active" : ""} 
            onClick={() => setIsDrivers(false)}
          >
            Vehicles
          </button>
        </div>
        {isDrivers ? <DriversList /> : <VehiclesList />}
      </div>

      
    </div>
  );
};

export default Dashboard;
