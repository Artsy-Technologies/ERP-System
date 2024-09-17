// src/components/FacultyMembers/FacultyMembers.js
import React from 'react';
import './FacultyMembers.css'; // Import the CSS file

const FacultyMembers = () => {
  const facultyList = [
    { name: 'Francis Tran', imgSrc: 'images/img1.png' },
    { name: 'Elliana Palacios', imgSrc: 'images/img2.png' },
    { name: 'Katherine Webster', imgSrc: 'images/img3.png' },
  ];

  return (
    <div className="faculty-container">
      <div className="faculty-members">
        <h3>Faculty Members</h3>
        <ul className="faculty-list">
          {facultyList.map((faculty, index) => (
            <li key={index}>
              <img src={faculty.imgSrc} alt={faculty.name} className="image_circle" />
              {faculty.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacultyMembers;
