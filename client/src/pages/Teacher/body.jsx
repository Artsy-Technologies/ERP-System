import React, { useEffect } from 'react';
import banner from '../../assets/Images/teacher.png';
import '../../components/Calendar/calendar.css';
import CalendarComponent from '../../components/Teacher/components/Calendar';
import LeftSidebar from '../../components/Teacher/components/LeftSidebar';
import FacultyList from '../../components/Teacher/components/FacultyList';
import './teacher.css'

export function Body() {
  useEffect(() => {
    CalendarComponent();
  }, []);

  return (
    <div style={{ display: "flex", background: "white" }} className="teachercontent">
      <LeftSidebar banner={banner} />
      <div className="right">
        <CalendarComponent />
        <FacultyList />
      </div>
    </div>
  );
}

export default Body;
