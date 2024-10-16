import React from "react";
import ProfileList from "./profilecard/ProfileList"; 
import TeacherRating from "./rating/TeacherRating"; 
import LeaveHistory from "./LeaveHistory/LeaveHistory"; 
import './TeacherDetails.css'; 

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
