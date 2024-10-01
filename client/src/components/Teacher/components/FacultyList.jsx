import React from 'react';
import { facultyData } from '../../../assets/webData/techerspagedata';

const FacultyList = () => {
  return (
    <div className="faculty-container">
      <div className="faculty-members">
        <h4>Faculty Members</h4>
        <ul>
          {facultyData.facultyMembers.map((member, index) => (
            <li key={index}>
              <img src={member.image} alt={member.name} className="image_circle" />{' '}
              <h4>{member.name}</h4>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="showmore">Show more</button>
    </div>
  );
};

export default FacultyList;
