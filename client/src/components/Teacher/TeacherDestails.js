// Dashboard.js
import React from "react";
import ProfileList from "./profilecard/ProfileList"; // Import the ProfileList component
import TeacherRating from "./rating/TeacherRating"; // Import the TeacherRating component
import LeaveHistory from "./LeaveHistory/LeaveHistory"; // Import the LeaveHistory component
import './TeacherDetails.css'; // Import your styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="profile-list">
        <ProfileList />
      </div>
      <div className="ratings-and-leave">
        <TeacherRating />
        <LeaveHistory />
      </div>
    </div>
  );
};

export default Dashboard;
