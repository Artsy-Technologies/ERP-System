import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarS.css';

const SidebarS = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} id="sidebar">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
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
      <ul className="head">
        <Link to="/ProfileS"><li>Student Profile</li></Link>
        <Link to="/Attendance"><li>Attendance Management</li></Link>
        <Link to="/Timetable"><li>Timetable And Schedule</li></Link>
        <Link to="/Grade"><li>Grade And Report Card</li></Link>
        <Link to="/Library"><li>Digital Library</li></Link>
        <Link to="/ExamAlert"><li>Exam Alerts</li></Link>
        <Link to="/Classes"><li>Virtual Classes</li></Link>
        <Link to="/Doubt"><li>Doubt Clearance</li></Link>
        <Link to="/Assignments"><li>Assignments</li></Link>
      </ul>

      <p>SERVICES</p>
      <ul className="head">
        <Link to="/Payment"><li>Payment Management</li></Link>
        <Link to="/Feedback"><li>Faculty Feedback</li></Link>
      </ul>

      <span>
        <Link to="/">
          <i className="fas fa-arrow-left"></i> Log out
        </Link>
      </span>
    </div>
  );
};

export default SidebarS;
