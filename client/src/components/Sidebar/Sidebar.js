import React from 'react';
import './Sidebar.css';

const Sidebar = ({ toggleSidebar }) => (
  <div className="sidebar" id="sidebar">
    <div className="logo">
      <img src="/images/logo.png" alt="Logo" />
    </div>
    <span>
      <a href="#">
        <i className="fa-solid fa-house"></i> Home Page
      </a>
    </span>

    <br />
    <br />
    <br />
    <p>FACULTY</p>
        <ul class="h">
            <li><a href="#">Faculty Profile</a></li>
            <li><a href="#">Faculty Leave Application</a></li>
        </ul>
        <br/><br/>
        <p>STUDENT RELATED</p>
        <ul class="h">
            <li><a href="#">Virtual Class</a></li>
            <li><a href="#">Attendance Management</a></li>
            <li><a href="#">Exam Room Allocation</a></li>
            <li><a href="#">Student Report Card</a></li>
            <li><a href="#">Schedule Management</a></li>
            <li><a href="#">Student Assignments</a></li>
        </ul>

    <span>
      <a href="#">
        <i className="fas fa-arrow-left"></i> Log out
      </a>
    </span>
  </div>
);

export default Sidebar;
