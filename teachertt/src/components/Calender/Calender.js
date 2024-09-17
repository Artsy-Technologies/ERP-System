import React, { useState} from 'react';
import './Calender.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Function to render calendar days
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    const days = []; // Store the days as JSX elements

    // Add the previous month's last days to the calendar
    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateOfLastMonth - i + 1}
        </li>
      );
    }

    // Add the current month's days to the calendar
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
      days.push(
        <li key={`curr-${i}`} className={isToday ? 'active' : ''}>
          {i}
        </li>
      );
    }

    // Add the next month's first days to the calendar
    for (let i = lastDayOfMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayOfMonth + 1}
        </li>
      );
    }

    return days;
  };

  // Handle month change
  const handlePrevNext = (direction) => {
    const newDate = new Date(currYear, currMonth + direction);
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <header>
        <p className="current-date">
          {months[currMonth]} {currYear}
        </p>
        <div className="navigation">
          <span onClick={() => handlePrevNext(-1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span onClick={() => handlePrevNext(1)}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {renderCalendar()} {/* Render the calendar days here */}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
