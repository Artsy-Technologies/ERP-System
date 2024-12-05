import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarT.css';

    

const SidebarT = () => {
    return(
  <div className="sidebar" id="sidebar">
    <div className="logo">
      <img src="/images/logo.png" alt="Logo" />
    </div>
    <span>
      <Link to="#">
        <i className="fa-solid fa-house"></i> Home Page
      </Link>
    </span>

    <br />
    <br />
    <br />
    <p>FACULTY</p>
        <ul className="h">
            <li><Link to="#">Faculty Profile</Link></li>
            <li><Link to="#">Faculty Leave Application</Link></li>
        </ul>
        <br/><br/>
        <p>STUDENT RELATED</p>
        <ul className="h">
            <Link to="Virtual Class"><li>Virtual Class</li></Link>
            <Link to="Attendance"><li>Attendance Management</li></Link>
            <Link to="Exam Room"><li>Exam Room Allocation</li></Link>
            <Link to=" Report Card"><li>Student Report Card</li></Link>
            <Link to="Schedule Management"><li>Schedule Management</li></Link>
            <Link to="Student Assignments"><li>Student Assignments</li></Link>
        </ul>

    <span>
      <Link to="#">
        <i className="fas fa-arrow-left"></i> Log out
      </Link>
    </span>
  </div>

    );
};
export default SidebarT;