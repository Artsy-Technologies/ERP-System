import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./electricals.css"; // Import the CSS file

const ElectricalsInventory = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <div className="container">
      <h1 className="heading">Electricals</h1>

      {/* Back button */}
      <button className="back-link" onClick={goBack}>
        Back
      </button>

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Total Quantity</th>
            <th>Damaged</th>
            <th>Status</th>
            <th>Updated ON</th>
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
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Teachers Tables</td>
            <td>130</td>
            <td>0</td>
            <td>In Stock</td>
            <td>21/12/22</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Shelves</td>
            <td>30</td>
            <td>10</td>
            <td>Shortage</td>
            <td>5/12/22</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Chairs</td>
            <td>800</td>
            <td>2</td>
            <td>In Stock</td>
            <td>8/12/22</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Wooden Board</td>
            <td>20</td>
            <td>0</td>
            <td>In Stock</td>
            <td>9/1/23</td>
            <td className="status done">Done</td>
          </tr>
          <tr>
            <td>Book Shelves</td>
            <td>40</td>
            <td>18</td>
            <td>Shortage</td>
            <td>9/1/23</td>
            <td className="status not-done">Not Done</td>
          </tr>
          <tr>
            <td>Lockers</td>
            <td>30</td>
            <td>0</td>
            <td>Shortage</td>
            <td>15/12/23</td>
            <td className="status not-done">Not Done</td>
          </tr>
          <tr>
            <td>Stools</td>
            <td>400</td>
            <td>20</td>
            <td>In Stock</td>
            <td>6/6/23</td>
            <td className="status done">Done</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ElectricalsInventory;
