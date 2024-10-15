import React from "react";
import banner from "../../assets/Images/teacher.png";
import LeftSidebar from "../../components/StudentTeacherDashboard/LeftSidebar";
import FacultyList from "../../components/StudentTeacherDashboard/FacultyList";
import "./teacher.css";
import Calendar from "../../components/common/calendar/Calendar";

export function Body() {
  return (
    <div
      style={{ display: "flex", background: "white" }}
      className="teachercontent"
    >
      <LeftSidebar banner={banner} />
      <div className="right">
        <Calendar />
        <FacultyList />
      </div>
    </div>
  );
}

export default Body;
