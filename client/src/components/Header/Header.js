import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  const handleSearchClick = () => {
    setSearchExpanded(true);
  };

  const handleBlur = () => {
    setSearchExpanded(false);
  };

  return (
    <header className="header">
      <div className={`search-bar ${isSearchExpanded ? 'expanded' : ''}`}>
        <i
          className="fas fa-search search-icon"
          onClick={handleSearchClick}
        ></i>
        {isSearchExpanded && (
          <input
            type="text"
            placeholder="Search..."
            onBlur={handleBlur}
            autoFocus
          />
        )}
      </div>
      <div className="icons">
        <div className="icon notifications">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="icon profile">
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </header>
  );
};
export default Header;

