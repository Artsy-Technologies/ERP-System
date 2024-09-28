import React, { useState } from "react";

import DriversList from "../../../components/Admin/Transport/DriversList-transport/DriversList"
import VehiclesList from "../../../components/Admin/Transport/VehiclesList-transport/VechiclesList";
import TransactionHistory from "../../../components/Admin/Transport/TransactionHistory-transport/TransactionHistory";
import ExpensesChart from "../../../components/Admin/Transport/ExpensesChart-transport/ExpensesChart";
import Card from "../../../components/Admin/Transport/Card-transport/Card";
import "./Dashboard.css";

const TransportDashboard = () => {
  const [isDrivers, setIsDrivers] = useState(true);

  return (
    <div className="dashboard-container">
      <div className="cards-section">
        <Card iconPath="/images/road.png" number="99,002" label="KM" />
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

export default TransportDashboard ;
