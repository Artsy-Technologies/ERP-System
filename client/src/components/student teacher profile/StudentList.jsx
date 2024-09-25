import React, { useEffect, useState } from "react";
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students: ', error));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <p>Name of the student: {student.name}</p>
            <p>Email of the student: {student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
