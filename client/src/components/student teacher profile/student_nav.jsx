import React from 'react';
import './Sudent_nav.css';
import logo from '../assets/logo.png'

const Sidebar = ({ toggleSidebar }) => (
  <div className="sidebar" id="sidebar">
     <div className="logo">
          <img src = {logo} alt="Logo" />
        </div>
    <span>
      <a href="#">
        <i className="fa-solid fa-house"></i> Home Page
      </a>
    </span>

    <br />
    <br />
    <br />
    <p>ACADEMICS</p>
    <ul className="h">
      <li><a href="/student-profile">Student Profile</a></li>
      <li><a href="#">Attendance Management</a></li>
      <li><a href="#">Timetable And Schedule</a></li>
      <li><a href="#">Grade And Report Card</a></li>
      <li><a href="/d_library">Digital Library</a></li>
      <li><a href="#">Exam Alerts</a></li>
      <li><a href="#">Virtual Classes</a></li>
      <li><a href="#">Doubt Clearance</a></li>
      <li><a href="#">Assignments</a></li>
    </ul>

    <p>SERVICES</p>
    <ul className="h">
      <li><a href="#">Payment Management</a></li>
      <li><a href="#">Faculty Feedback</a></li>
    </ul>

    <span>
      <a href="#">
        <i className="fas fa-arrow-left"></i> Log out
      </a>
    </span>
  </div>
);

export default Sidebar;

 