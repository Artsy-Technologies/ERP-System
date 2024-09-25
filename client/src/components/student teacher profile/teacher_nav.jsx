import React, { useEffect } from 'react';
import '../Style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faBell, faCircleUser, faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
import TeacherProfile from './TeacherForm';
import TeacherForm from './TeacherForm';

const TeachersNav = () => {
  useEffect(() => {
    // Add event listener for toggle button when component mounts
    const toggleButton = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    const handleToggle = () => {
      sidebar.classList.toggle('active');
    };

    toggleButton.addEventListener('click', handleToggle);

    // Clean up event listener on component unmount
    return () => {
      toggleButton.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div>
      
      <div className="sidebar" id="sidebar">
        <div className="logo">
        <img src = {logo} alt="Logo" /> {/* Update the path as necessary */}
        </div>
        <span>
          |<a href="#">
            <FontAwesomeIcon icon={faHouse}/> Home Page
          </a>
        </span>
        <br /><br /><br />
        <p>FACULTY</p>
        <ul className="h">
          <li><a href="/teacher-profile">Faculty Profile</a></li>
          <li><a href="#">Faculty Leave Application</a></li>
        </ul>
        <br /><br />
        <p>STUDENT RELATED</p>
        <ul className="h">
          <li><a href="#">Virtual Class</a></li>
          <li><a href="#">Attendance Management</a></li>
          <li><a href="#">Exam Room Allocation</a></li>
          <li><a href="#">Student Report Card</a></li>
          <li><a href="#">Schedule Management</a></li>
          <li><a href="#">Student Assignments</a></li>
        </ul>
        <br /><br /><br />
        <span>
          <a href="#">
            <FontAwesomeIcon icon={faArrowLeft}/> Log out
          </a>
        </span>
      </div>
      <button className="toggle-btn" id="toggle-btn">
        <FontAwesomeIcon icon={faBars}/>
      </button>

      {/* <TeacherForm/> */}

    </div>
  );
};

export default TeachersNav;
