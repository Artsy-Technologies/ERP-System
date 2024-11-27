import React from 'react';
import './inventory.css';

const Complaints = () => {
  return (
    <div className="complaints">
      <h3 className='inventory-h3'>Complaints</h3>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Type</th>
            <th>Issue</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chair</td>
            <td>Furniture</td>
            <td>Damaged</td>
            <td><button className="inventory-btn" onClick={() => window.location.href = 'mailto:contact@example.com'}>Email</button></td>
          </tr>
          <tr>
            <td>Pipeline</td>
            <td>Plumbing</td>
            <td>Damaged</td>
            <td><button className="inventory-btn" onClick={() => window.location.href = 'mailto:contact@example.com'}>Email</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Complaints;
