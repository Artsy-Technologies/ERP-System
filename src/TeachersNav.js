import React, { useState } from 'react';
import './styles.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCircleUser, faHouse, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

const TeachersNav = () => {
  const [formData, setFormData] = useState({
    class: '',
    hall: '',
    subject: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    rollNumbers: ''
  });

  const [history, setHistory] = useState([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      class: formData.class,
      date: new Date(formData.date).toLocaleDateString(),
      rollNumbers: formData.rollNumbers,
      hall: formData.hall,
      subject: formData.subject,
      time: `${formData.timeFrom} - ${formData.timeTo}`
    };
    
    setHistory([...history, newEntry]);
    setFormData({
      class: '',
      hall: '',
      subject: '',
      date: '',
      timeFrom: '',
      timeTo: '',
      rollNumbers: ''
    });
  };

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <header className="header">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <div className="icon notifications">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="icon profile">
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
      </header>
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
        <span>|<a href="#"><FontAwesomeIcon icon={faHouse} /> Home Page</a></span>
        <br /><br /><br />
        <p>FACULTY</p>
        <ul className="h">
          <li><a href="#">Faculty Profile</a></li>
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
          <img src="./images/logout.png" height="40" width="80" alt="Logout" id="l1" />
        </span>
      </div>
      <button className="toggle-btn" id="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="container">
        <span id="fa">
          <img src="./images/faculty.png" height="50" width="150" alt="Faculty" id="f00" />
        </span>
        <img src="./images/arrow.png" height="40" width="40" id="a2" alt="Arrow" />
        <h2 id="a1">EXAM HALL ALLOCATION</h2>
        <div className="form-history-container">
          <form id="examForm" onSubmit={handleSubmit}>
            <center><h3>FILL THE FORM TO ALLOCATE STUDENTS</h3></center>
            <div className="form-group">
              <label htmlFor="class">STUDENTS OF CLASS</label>
              <select id="class" value={formData.class} onChange={handleChange} required>
                <option value="7TH D">7TH D</option>
                <option value="7TH C">7TH C</option>
                <option value="7TH B">7TH B</option>
                <option value="7TH A">7TH A</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hall">HALL FOR EXAMINATION</label>
              <select id="hall" value={formData.hall} onChange={handleChange} required>
                <option value="BLOCK I CLASS B2">BLOCK I CLASS B2</option>
                <option value="BLOCK II CLASS B2">BLOCK II CLASS B2</option>
                <option value="BLOCK III CLASS B2">BLOCK III CLASS B2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">SUBJECT OF EXAM</label>
              <select id="subject" value={formData.subject} onChange={handleChange} required>
                <option value="ENGLISH">ENGLISH</option>
                <option value="MATHS">MATHS</option>
                <option value="SCIENCE">SCIENCE</option>
                <option value="SOCIAL">SOCIAL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">DATE</label>
              <input type="date" id="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="timeFrom">TIME FROM</label>
              <input type="time" id="timeFrom" value={formData.timeFrom} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="timeTo">TIME TO</label>
              <input type="time" id="timeTo" value={formData.timeTo} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="rollNumbers">ROLL NUMBERS OF ALLOTED STUDENTS</label>
              <input type="text" id="rollNumbers" placeholder="e.g., 22-49" value={formData.rollNumbers} onChange={handleChange} required />
            </div>
            <button type="submit" style={{ width: '100px' }}>Submit</button>
            <span><button type="reset" style={{ width: '100px' }} onClick={() => setFormData({})}>Reset</button></span>
          </form>
          <div className="history">
            <center><h3>HISTORY</h3></center>
            <div id="historyEntries">
              {history.map((entry, index) => (
                <div className="history-entry" key={index}>
                  <p><strong>Class:</strong> {entry.class}</p>
                  <p><strong>Date:</strong> {entry.date}</p>
                  <p><strong>Roll No:</strong> {entry.rollNumbers}</p>
                  <p><strong>Hall:</strong> {entry.hall}</p>
                  <p><strong>Subject:</strong> {entry.subject}</p>
                  <p><strong>Time:</strong> {entry.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersNav;
