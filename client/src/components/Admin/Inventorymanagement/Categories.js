import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './inventory.css';  // Import CSS
import labImg from './images/lab.png'
import furnitureImg from './images/furniture.png'
import electricImg from './images/electric.png'
import maintainanceImg from './images/maintainance.png'
import plumberImg from './images/plumber.png'
import sportsImg from './images/sports.png'


const Categories = () => {
  return (
    <div className="categories">
      <Link to="/admin-dashboard/inventory/lab-equipment" className="category-box">
        <img src={labImg} alt="Lab Equipment" />
        <p>Lab Equipment</p>
        <span>Machines, tools, and more</span>
      </Link>
      
      <Link to="/admin-dashboard/inventory/furniture" className="category-box">
        <img src={furnitureImg} alt="Furniture" />
        <p>Furniture</p>
        <span>Desks, chairs, and more</span>
      </Link>
      
      <Link to="/admin-dashboard/inventory/electricals" className="category-box">
        <img src={electricImg} alt="Electricals" />
        <p>Electricals</p>
        <span>Lights, circuits, and more</span>
      </Link>
      
      <Link to="/admin-dashboard/inventory/plumbing" className="category-box">
        <img src={plumberImg} alt="Plumbing" />
        <p>Plumbing</p>
        <span>Fixtures, pipelines, and more</span>
      </Link>
      
      <Link to="/admin-dashboard/inventory/sports-equipment" className="category-box">
        <img src={sportsImg} alt="Sports Equipment" />
        <p>Sports Equipment</p>
        <span>Balls, nets, and more</span>
      </Link>
      
      <Link to="/admin-dashboard/inventory/maintenance" className="category-box">
        <img src={maintainanceImg} alt="Maintenance" />
        <p>Maintenance</p>
        <span>Repairs, service, and more</span>
      </Link>
    </div>
  );
};

export default Categories;
