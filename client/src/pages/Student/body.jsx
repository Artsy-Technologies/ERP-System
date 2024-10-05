import React, { useEffect } from 'react';
import banner from '../../assets/Images/teacher.png';
// import '../../components/Calendar/calendar.css';
import CalendarComponent from '../../components/Teacher/components/Calendar';
import '../../pages/Teacher/teacher.css'
import LeftSidebar from '../../components/Teacher/components/LeftSidebar';
import FacultyList from '../../components/Teacher/components/FacultyList';
import Calendar from '../../components/common/calendar/Calendar';

export function Body() {
  useEffect(() => {
    CalendarComponent();
  }, []);

  return (
    <div style={{ display: "flex", background: "white" }} className="teachercontent">
      <LeftSidebar banner={banner} />
      <div>
        <Calendar />
        {/* <FacultyList /> */}
      </div>
    </div>
  );
}

export default Body;
