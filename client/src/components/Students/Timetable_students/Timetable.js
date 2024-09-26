import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Timetable.css';

const TimetableTable = ({ timetableData }) => {
  if (!timetableData || typeof timetableData !== 'object' || !timetableData.timetable) {
    console.error('Invalid timetable data:', timetableData);
    return null;
  }

  const { columns, timetable } = timetableData;
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <table className="timetable-table">
      <thead>
        <tr>
          <th></th>
          {Array.from({ length: columns }).map((_, index) => (
            <th key={index}>Period {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(timetable).map((dayIndex) => (
          <tr key={dayIndex}>
            <td>{dayNames[dayIndex - 1] || `Day ${dayIndex}`}</td>
            {Array.from({ length: columns }).map((_, period) => (
              <td key={period}>
                {timetable[dayIndex] && timetable[dayIndex][period + 1] ? timetable[dayIndex][period + 1] : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Timetable = () => {
  const [timetables, setTimetables] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const response = await axios.get('/api/timetables');
        setTimetables(response.data);
        setError(null); // Reset error if fetching is successful
      } catch (error) {
        console.error('Error fetching timetables:', error);
        setError('Failed to load timetables. Please try again later.');
      }
    };
    fetchTimetables();
  }, []); // Ensure dependencies are correct to avoid infinite loops

  return (
    <div className="timetable-container">
      {error && <div className="error-message">{error}</div>}
      {timetables.map((timetable, index) => (
        <div key={index} className="timetable">
          <TimetableTable timetableData={timetable} />
        </div>
      ))}
    </div>
  );
};

export default Timetable;
