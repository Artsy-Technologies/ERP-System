import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleSidebar }) => (
  <div className="sidebar" id="sidebar">
    <div className="logo">
      <img src="/images/logo.png" alt="Logo" />
    </div>

    <span>
      <Link to="/">
        <i className="fa-solid fa-house"></i> Home Page
      </Link>
    </span>

    <br />
    <br />
    <br />
    <p>ACADEMICS</p>
    <ul className="h">
      <li><Link to="/student-profile">Student Profile</Link></li>
      <li><Link to="/attendance-management">Attendance Management</Link></li>
      <li><Link to="/timetable-schedule">Timetable And Schedule</Link></li>
      <li><Link to="/grade-report">Grade And Report Card</Link></li>
      <li><Link to="/digital-library">Digital Library</Link></li>
      <li><Link to="/exam-alerts">Exam Alerts</Link></li>
      <li><Link to="/virtual-classes">Virtual Classes</Link></li>
      <li><Link to="/doubt-clearance">Doubt Clearance</Link></li>
      <li><Link to="/assignments">Assignments</Link></li>
    </ul>

    <p>SERVICES</p>
    <ul className="h">
      <li><Link to="/payment-management">Payment Management</Link></li>
      <li><Link to="/faculty-feedback">Faculty Feedback</Link></li>
    </ul>

    <span>
      <Link to="/logout">
        <i className="fas fa-arrow-left"></i> Log out
      </Link>
    </span>
  </div>
);

export default Sidebar;
