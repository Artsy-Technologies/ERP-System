import React from "react";
import ProfileList from "./profilecard/ProfileList"; 
import TeacherRating from "./rating/TeacherRating"; 
import LeaveHistory from "./LeaveHistory/LeaveHistory"; 
import './TeacherDetails.css'; 

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container h-auto">
        <div className="profile-list">
          <ProfileList />
        </div>
        <div className="ratings-and-leave">
          <TeacherRating />
        </div>
      </div>
      <div className="leave">
        <LeaveHistory />
      </div>
    </>
  );
};

export default Dashboard;
