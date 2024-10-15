import React, { useEffect } from "react";
import banner from "../../assets/Images/teacher.png";
import CalendarComponent from "../../components/StudentTeacherDashboard/Calendar";
import "../../pages/Teacher/teacher.css";
import LeftSidebar from "../../components/StudentTeacherDashboard/LeftSidebar";
import FacultyList from "../../components/StudentTeacherDashboard/FacultyList";
import Calendar from "../../components/common/calendar/Calendar";

export function Body() {
  useEffect(() => {
    CalendarComponent();
  }, []);

  return (
    <div
      style={{ display: "flex", background: "white" }}
      className="studentcontent"
    >
      <LeftSidebar banner={banner} />
      <div>
        <Calendar />
        <FacultyList />
      </div>
    </div>
  );
}

export default Body;
