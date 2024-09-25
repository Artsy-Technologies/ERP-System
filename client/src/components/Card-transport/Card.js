import React from 'react';
import './Card.css';

const Card = ({ iconPath, number, label }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={iconPath} alt="Card Icon" />
      </div>
      <div className="card-content">
        <p className="number">{number}</p>
        <p className="label">{label}</p>
      </div>
    </div>
  );
};

export default Card;
