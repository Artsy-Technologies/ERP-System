import React from 'react'

export default function Header() {
  return (
    <header style={{height:"4rem", position:"sticky",top:"0",left:"20",zIndex:"4" }} className="header">
      <div className="search-bar"><i className="fas fa-search"></i>
        <input type="text" id="search bar" placeholder="Search..." />
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
  )
}
