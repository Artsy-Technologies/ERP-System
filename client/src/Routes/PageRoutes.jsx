/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorRoutes from './ErrorRoutes';
import LandingPage from '../pages/LandingPage/LandingPage'
import Student from  '../pages/Student/student.jsx'
import Teacher from '../pages/Teacher/teacher.jsx';
// import TransportDashboard from '../pages/AdminDashboard/Transport/Transport'
// import FormPage from '../pages/AdmissionForm/AdmissionForm.jsx'
import ExamHallAllocation from '../components/Teacher/Exam Hall Allocation/ExamHallAllocation.js';


const PagesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<LandingPage />} />
            <Route path="/student-dashboard" element={<Student/>} />
            <Route path="/teacher-dashboard" element={<Teacher/>} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} />

            {/* Just Added here for testing, need to link in sidebar */}
            {/* <Route path='/admin-dashboard-transport' element={<TransportDashboard />} />
            <Route path="/form" element={<FormPage/>} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} /> */}

            <Route path="*" element={<ErrorRoutes />} />
        </Routes>
    );
}

export default PagesRoutes;