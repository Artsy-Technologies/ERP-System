import React from 'react'



export default function Header() {
  return (
    <header style={{ height: "5rem", position: "sticky", top: "0", left: "20", zIndex: "4", background: "white", boxShadow: "0px 8px 28px 0px #4859661A",}} className="header">
      <div class="container-fluid">
        <form class="d-flex">
          <input style={{ width: "40%" }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
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
