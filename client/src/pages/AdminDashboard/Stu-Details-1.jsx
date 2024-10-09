import StudentProfile from '../../components/Admin/Student-Details/studentProfile';
import StudentAttendance from '../../components/Admin/Student-Details/studentAttendence';
import PaymentHistory from '../../components/Admin/Student-Details/paymentDetails';
import GradeAndReport from '../../components/Admin/Student-Details/gradeCard';
import React from 'react';

function StudentDetails1() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
              <div style={{ width:'360px', margin: '10px' }}>
                  <StudentProfile />
              </div>
              <div style={{ flex: 1, margin: '10px' }}>
                  <StudentAttendance />
              </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
              <div style={{ flex: 1, margin: '10px' }}>
                  <PaymentHistory />
              </div>
              <div style={{ flex: 1, margin: '10px' }}>
                  <GradeAndReport />
              </div>
          </div>
      </div>
  );
}

export default StudentDetails1;
