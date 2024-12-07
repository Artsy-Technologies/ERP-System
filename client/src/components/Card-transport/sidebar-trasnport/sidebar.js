import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className='topitem'>
          <Link to="/">
            <i className="fa-solid fa-house"></i> Home Page
          </Link>
        
          <Link to="/teachers" >Teachers</Link>
        
          <Link to="/students">Students</Link>
        
          <Link to="/finance">Finance</Link>
        
          <Link to="/"> {/* Transport routes to dashboard */}
             Transport
          </Link>
        
          <Link to="/inventory">Inventory Management</Link>
          </div>
          <div className='logout'>
          <Link to="/logout">
            <i className="fas fa-arrow-left"></i> Log out
          </Link>
          </div>
      
    </div>
  );
};

export default Sidebar;
