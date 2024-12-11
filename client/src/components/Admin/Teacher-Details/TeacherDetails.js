import React from "react";
import ProfileList from "./profilecard/ProfileList";
import TeacherRating from "./rating/TeacherRating";
import LeaveHistory from "./LeaveHistory/LeaveHistory";
import "./TeacherDetails.css";

const TeacherDashboard = () => {
  return (
    <>
      <div className="teacher-dashboard-container h-auto">
        <div className="teacher-profile-list">
          <ProfileList />
        </div>
        <div className="teacher-ratings-section">
          <TeacherRating />
        </div>
      </div>
      <div className="teacher-leave-section">
        <LeaveHistory />
      </div>
    </>
  );
};

export default TeacherDashboard;
