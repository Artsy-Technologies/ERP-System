import React from 'react';
// import '../../../components/Calendar/calendar.css';

const CalendarComponent = () => {
  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <p className="calendar-current-date"></p>
        <div className="calendar-navigation">
          <span id="calendar-prev" className="material-symbols-rounded">
            chevron_left
          </span>
          <span id="calendar-next" className="material-symbols-rounded">
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <ul className="calendar-weekdays">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="calendar-dates"></ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
