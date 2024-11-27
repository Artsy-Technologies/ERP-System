import React from 'react';
import './Card.css';

const Card = ({ iconPath, number, label }) => {
  return (
    <div className="card">
      {/* Icon Section */}
      <div className="icon">
        <img src={iconPath} alt={`${label} Icon`} />
      </div>
      {/* Card Content */}
      <div className="card-content">
        <span className="number">{number}</span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
};

export default Card;
