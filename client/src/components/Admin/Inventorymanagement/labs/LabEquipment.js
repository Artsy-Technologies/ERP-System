import React, { useState } from 'react';
import './labs.css';  // Import the CSS file

const LabEquipment = () => {
  const [activeTable, setActiveTable] = useState('chemistry');

  const showTable = (subject) => {
    setActiveTable(subject);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <h1>Laboratory</h1>

      <button className="back-button" onClick={goBack}>Back</button>

      <div className="tabs">
        <div className={`tab ${activeTable === 'chemistry' ? 'active' : ''}`} onClick={() => showTable('chemistry')}>Chemistry</div>
        <div className={`tab ${activeTable === 'biology' ? 'active' : ''}`} onClick={() => showTable('biology')}>Biology</div>
        <div className={`tab ${activeTable === 'physics' ? 'active' : ''}`} onClick={() => showTable('physics')}>Physics</div>
        <div className={`tab ${activeTable === 'computer' ? 'active' : ''}`} onClick={() => showTable('computer')}>Computer</div>
        <div className={`tab ${activeTable === 'mathematics' ? 'active' : ''}`} onClick={() => showTable('mathematics')}>Mathematics</div>
      </div>

      {/* Chemistry Table */}
      {activeTable === 'chemistry' && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Damaged</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student Desk</td>
              <td>200</td>
              <td>0</td>
              <td>In Stock</td>
              <td>11/12/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            <tr>
              <td>Teachers Tables</td>
              <td>130</td>
              <td>0</td>
              <td>In Stock</td>
              <td>21/12/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      )}

      {/* Biology Table */}
      {activeTable === 'biology' && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Damaged</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microscopes</td>
              <td>50</td>
              <td>2</td>
              <td>In Stock</td>
              <td>10/12/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      )}

      {/* Physics Table */}
      {activeTable === 'physics' && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Damaged</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Voltmeters</td>
              <td>80</td>
              <td>0</td>
              <td>In Stock</td>
              <td>12/12/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      )}

      {/* Computer Table */}
      {activeTable === 'computer' && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Damaged</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monitors</td>
              <td>200</td>
              <td>5</td>
              <td>In Stock</td>
              <td>11/11/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      )}

      {/* Mathematics Table */}
      {activeTable === 'mathematics' && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total Quantity</th>
              <th>Damaged</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graphing Calculators</td>
              <td>100</td>
              <td>0</td>
              <td>In Stock</td>
              <td>01/12/22</td>
              <td><span className="status-done">Done</span></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LabEquipment;
