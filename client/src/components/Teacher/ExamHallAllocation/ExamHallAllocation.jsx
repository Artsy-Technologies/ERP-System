import React, { useState } from "react";
import "./ExamHall.css"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacultyImg from './Images/faculty.png'
import ArrowImg from './Images/arrow.png'
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const ExamHallAllocation = () => {
  const [formData, setFormData] = useState({
    class: "",
    hall: "",
    subject: "",
    date: "",
    timeFrom: "",
    timeTo: "",
    rollNumbers: "",
  });

  const [history, setHistory] = useState([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      class: formData.class,
      date: new Date(formData.date).toLocaleDateString(),
      rollNumbers: formData.rollNumbers,
      hall: formData.hall,
      subject: formData.subject,
      time: `${formData.timeFrom} - ${formData.timeTo}`,
    };

    setHistory([...history, newEntry]);
    setFormData({
      class: "",
      hall: "",
      subject: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      rollNumbers: "",
    });
  };

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <button className="toggle-btn" id="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="exam-container">
        <span id="fa">
          <img
            src={FacultyImg}
            height="50"
            width="150"
            alt="Faculty"
            id="f00"
          />
        </span>
        
        <h2 id="a1">EXAM HALL ALLOCATION</h2>
        <div className="form-history-container">
          <form className="exam-form" id="examForm" onSubmit={handleSubmit}>
            <center>
              <h3>FILL THE FORM TO ALLOCATE STUDENTS</h3>
            </center>
            <div className="form-group">
              <label htmlFor="class">STUDENTS OF CLASS</label>
              <select
                id="class"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="7TH D">7TH D</option>
                <option value="7TH C">7TH C</option>
                <option value="7TH B">7TH B</option>
                <option value="7TH A">7TH A</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hall">HALL FOR EXAMINATION</label>
              <select
                id="hall"
                value={formData.hall}
                onChange={handleChange}
                required
              >
                <option value="BLOCK I CLASS B2">BLOCK I CLASS B2</option>
                <option value="BLOCK II CLASS B2">BLOCK II CLASS B2</option>
                <option value="BLOCK III CLASS B2">BLOCK III CLASS B2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">SUBJECT OF EXAM</label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="ENGLISH">ENGLISH</option>
                <option value="MATHS">MATHS</option>
                <option value="SCIENCE">SCIENCE</option>
                <option value="SOCIAL">SOCIAL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">DATE</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeFrom">TIME FROM</label>
              <input
                type="time"
                id="timeFrom"
                value={formData.timeFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeTo">TIME TO</label>
              <input
                type="time"
                id="timeTo"
                value={formData.timeTo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rollNumbers">
                ROLL NUMBERS OF ALLOTED STUDENTS
              </label>
              <input
                type="text"
                id="rollNumbers"
                placeholder="e.g., 22-49"
                value={formData.rollNumbers}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={{ width: "100px" }}>
              Submit
            </button>
            <span>
              <button
                type="reset"
                style={{ width: "100px" }}
                onClick={() => setFormData({})}
              >
                Reset
              </button>
            </span>
          </form>
          <div className="history">
            <center>
              <h3>HISTORY</h3>
            </center>
            <div id="historyEntries">
              {history.map((entry, index) => (
                <div className="history-entry" key={index}>
                  <p>
                    <strong>Class:</strong> {entry.class}
                  </p>
                  <p>
                    <strong>Date:</strong> {entry.date}
                  </p>
                  <p>
                    <strong>Roll No:</strong> {entry.rollNumbers}
                  </p>
                  <p>
                    <strong>Hall:</strong> {entry.hall}
                  </p>
                  <p>
                    <strong>Subject:</strong> {entry.subject}
                  </p>
                  <p>
                    <strong>Time:</strong> {entry.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHallAllocation;
