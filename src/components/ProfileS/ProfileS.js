import React, { useState } from 'react';
import './ProfileS.css';

const ProfileS = () => {
  

  return (
    <div>
      
      <div className="profile-container">
        <h1 className="profile-header">Student Profile</h1>
        <div className="profile-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Roll Number:</strong> 123456</p>
          <p><strong>Email:</strong> john.doe@school.com</p>
          <p><strong>Major:</strong> Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileS;
