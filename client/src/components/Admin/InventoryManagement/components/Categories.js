import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import '../inventory.css';  // Import CSS

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/lab-equipment" className="category-box">
        <img src="images/lab.png" alt="Lab Equipment" />
        <p>Lab Equipment</p>
        <span>Machines, tools, and more</span>
      </Link>
      
      <Link to="/furniture" className="category-box">
        <img src="images/furniture.png" alt="Furniture" />
        <p>Furniture</p>
        <span>Desks, chairs, and more</span>
      </Link>
      
      <Link to="/electricals" className="category-box">
        <img src="images/electric.png" alt="Electricals" />
        <p>Electricals</p>
        <span>Lights, circuits, and more</span>
      </Link>
      
      <Link to="/plumbing" className="category-box">
        <img src="images/plumber.png" alt="Plumbing" />
        <p>Plumbing</p>
        <span>Fixtures, pipelines, and more</span>
      </Link>
      
      <Link to="/sports-equipment" className="category-box">
        <img src="images/sports.png" alt="Sports Equipment" />
        <p>Sports Equipment</p>
        <span>Balls, nets, and more</span>
      </Link>
      
      <Link to="/maintenance" className="category-box">
        <img src="images/maintainance.png" alt="Maintenance" />
        <p>Maintenance</p>
        <span>Repairs, service, and more</span>
      </Link>
    </div>
  );
};

export default Categories;
