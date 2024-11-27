import React, { useState } from "react";
import StudentForm from "./StudentForm";

const StudentProfile = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // const handleStudentClick = (student) => {
  //   setSelectedStudent(student);
  // };

  const handleFormSubmit = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      {/* <StudentList onStudentClick={handleStudentClick} /> */}

      <StudentForm student={selectedStudent} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default StudentProfile;
