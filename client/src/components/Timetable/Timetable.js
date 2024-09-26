import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Timetable.css';

const TimetableManager = () => {
  const [timetableData, setTimetableData] = useState({
    rows: 0,
    columns: 0,
    timetable: {},
  });
  const [savedTimetables, setSavedTimetables] = useState([]);

  const dayMappings = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const promptForTimetableDetails = () => {
    let numRows = prompt("Enter the number of weekdays (rows):");
    let numColumns = prompt("Enter the number of periods (columns):");

    numRows = parseInt(numRows);
    numColumns = parseInt(numColumns);

    // Validate inputs
    if (isNaN(numRows) || isNaN(numColumns) || numRows < 1 || numRows > 7 || numColumns < 1) {
      alert("Please enter valid numbers: 1-7 for weekdays and 1 or more for periods.");
      return;
    }

    setTimetableData((prev) => ({
      ...prev,
      rows: numRows,
      columns: numColumns,
      timetable: {},
    }));
  };

  const createTimetable = (numRows, numColumns) => {
    const table = [];

    for (let i = 1; i <= numRows; i++) {
      const row = [];
      row.push(
        <td key={`day-${i}`}>{dayMappings[i - 1] || `Day ${i}`}</td>
      );

      for (let j = 1; j <= numColumns; j++) {
        row.push(
          <td key={`day-${i}-period-${j}`}>
            <input
              type="text"
              placeholder={`Subject ${j}`}
              onChange={(event) => handleInputChange(event, i, j)}
            />
          </td>
        );
      }

      table.push(<tr key={`row-${i}`}>{row}</tr>);
    }

    return table;
  };

  const handleInputChange = (event, day, period) => {
    const value = event.target.value;

    setTimetableData((prev) => {
      const newTimetable = { ...prev.timetable };
      if (!newTimetable[day]) {
        newTimetable[day] = {};
      }
      newTimetable[day][period] = value;

      return { ...prev, timetable: newTimetable };
    });
  };

  const saveTimetable = () => {
    axios.post('/api/timetables', timetableData)
      .then((response) => {
        alert(response.data.message || 'Timetable saved successfully!');
        viewTimetable(); // Refresh the list after saving
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while saving the timetable.');
      });
  };

  const viewTimetable = () => {
    axios.get('/api/timetables')
      .then((response) => {
        if (response.data && Array.isArray(response.data.timetables)) {
          setSavedTimetables(response.data.timetables);
        } else {
          alert('No timetables found');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while retrieving the timetable.');
      });
  };

  const deleteTimetable = () => {
    axios.delete('/api/timetables')
      .then((response) => {
        alert(response.data.message || 'Timetable deleted successfully!');
        setSavedTimetables([]); // Clear the list after deletion
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while deleting the timetable.');
      });
  };

  useEffect(() => {
    viewTimetable(); // Fetch the timetables on component mount
  }, []);

  return (
    <div id="s">
      <button className="button1" onClick={promptForTimetableDetails}>Create Timetable</button>
      <button className="button2" onClick={saveTimetable}>Save Timetable</button>
      <button className="button3" onClick={viewTimetable}>View Timetable</button>
      <button className="button4" onClick={deleteTimetable}>Delete Timetable</button>

      <div className="timetable-container" id="timetableContainer">
        <table className="timetable">
          <thead>
            <tr>
              <td><h3>Days / Periods</h3></td>
              {[...Array(timetableData.columns)].map((_, i) => (
                <th key={`period-${i + 1}`}>Period {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {createTimetable(timetableData.rows, timetableData.columns)}
          </tbody>
        </table>
      </div>

      {savedTimetables.map((timetable, index) => (
        <div key={`saved-timetable-${index}`}>
          <h3>Timetable {index + 1}</h3>
          <table className="timetable">
            <thead>
              <tr>
                <th>Days / Periods</th>
                {[...Array(timetable.columns)].map((_, i) => (
                  <th key={`saved-period-${i + 1}`}>Period {i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {createTimetable(timetable.rows, timetable.columns).map((row, i) => (
                <tr key={`saved-row-${i}`}>
                  <td>{dayMappings[i] || `Day ${i + 1}`}</td>
                  {[...Array(timetable.columns)].map((_, j) => (
                    <td key={`saved-cell-${i}-${j}`}>
                      {timetable.timetable[i + 1] && timetable.timetable[i + 1][j + 1] ? timetable.timetable[i + 1][j + 1] : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TimetableManager;
