import React from "react";
import "./TransactionHistory.css";

const transactions = [
  { receiver: "Tesco Market", type: "Salary", date: "13 Dec 2020", amount: "$75.67", status: "Paid" },
  { receiver: "Jacob Mathew", type: "Bus Maintenance", date: "14 Dec 2020", amount: "$250.00", status: "Due" },
  // Add more transactions as necessary
];

const TransactionHistory = () => {
  return (
    <div className="transaction-section">
      <h2 className="transactionn">Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.receiver}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
