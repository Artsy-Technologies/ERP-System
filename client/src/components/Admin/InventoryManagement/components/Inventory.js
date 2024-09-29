import React from 'react';
import '../inventory.css';
// Import CSS file

const Inventory = () => {
  return (
    <section className="left-section">
      <h2>Inventory and Asset History</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Type</th>
            <th>Date</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nitrates, Burner, Filter Paper</td>
            <td>Chem Lab</td>
            <td>2024-02-24</td>
            <td>Purchase</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>5 CPUs</td>
            <td>Computer Lab</td>
            <td>2024-02-24</td>
            <td>Damaged, needs Repair</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Nitrates, Burner, Filter Paper</td>
            <td>Chem Lab</td>
            <td>2024-02-24</td>
            <td>Purchase</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>5 CPUs</td>
            <td>Computer Lab</td>
            <td>2024-02-24</td>
            <td>Damaged, needs Repair</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Nitrates, Burner, Filter Paper</td>
            <td>Chem Lab</td>
            <td>2024-02-24</td>
            <td>Purchase</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>5 CPUs</td>
            <td>Computer Lab</td>
            <td>2024-02-24</td>
            <td>Damaged, needs Repair</td>
            <td className="status done">Done</td>
          </tr>
          {/* More rows as necessary */}
        </tbody>
      </table>
    </section>
  );
};

export default Inventory;
