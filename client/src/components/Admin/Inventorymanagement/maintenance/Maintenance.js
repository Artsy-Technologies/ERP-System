import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./maintenance.css"; // Import the CSS file (ensure this exists)

const Maintenance = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <div className="container">
      <h1 className="lab-h1">Maintenance</h1>

      {/* Back button */}
      <button className="back-button" onClick={goBack}>
        Back
      </button>

      {/* Maintenance content can be added here */}
      <div className="maintenance-info">
        <h2 className="inventory-h2">Maintenance Contacts</h2>
        <ul>
          <li>Electrician: 123-456-78900</li>
          <li>Furniture Repairs: 987-654-3210</li>
          <li>Plumbing: 555-555-5555</li>
        </ul>
      </div>
    </div>
  );
};

export default Maintenance;
