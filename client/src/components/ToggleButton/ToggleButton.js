import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ toggleSidebar }) => (
  <button className="toggle-btn" id="toggle-btn" onClick={toggleSidebar}>
    <i className="fa-solid fa-bars"></i>
  </button>
);

export default ToggleButton;
