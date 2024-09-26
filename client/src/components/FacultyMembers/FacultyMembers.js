import React from 'react';
import './FacultyMembers.css';
const FacultyMembers = () => {
  const facultyList = [
    { name: 'Francis Tran', imgSrc: '../assets/Images/img1.png' },
    { name: 'Elliana Palacios', imgSrc: '../assets/Images/img2.png' },
    { name: 'Katherine Webster', imgSrc: '../assets/Images/img3.png' },
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
