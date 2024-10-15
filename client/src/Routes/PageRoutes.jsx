/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import React from 'react';
import ExamAlerts from '../components/Students/ExamAlerts/ExamAlerts.jsx';
import { Routes, Route } from 'react-router-dom';
import ErrorRoutes from './ErrorRoutes';
import LandingPage from '../pages/LandingPage/LandingPage'
import Student from '../pages/Student/student.jsx'
import Teacher from '../pages/Teacher/teacher.jsx';
import Dashboardpage from '../components/Layouts/Dashboardpage.jsx';
import TeacherLayout from '../pages/Teacher/TeacherAdminLayout.jsx';
import StudentAdminLayout from '../pages/Student/StudentAdminLayout.jsx';
=======
import React from "react";

import { Routes, Route } from "react-router-dom";
import ErrorRoutes from "./ErrorRoutes";

import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboardpage from "../components/Layouts/Dashboardpage.jsx";
import TeacherLayout from "../pages/Teacher/TeacherAdminLayout.jsx";
import StudentLayout from "../pages/Student/StudentAdminLayout.jsx";

// import Admin from "../pages/AdminDashboard/Admin.jsx";
import TeacherList from "../components/Admin/Teacher-Details/card/TeacherList.js";
import StudentDetails1 from "../pages/AdminDashboard/Stu-Details-1.jsx";
import Transport from "../pages/AdminDashboard/Transport/Transport.jsx";
import Finance from "../components/Admin/Finance/Finance.jsx";
import Inventorymain from "../pages/AdminDashboard/InventoryManagement/Inventorymain.js";

import Teacher from "../pages/Teacher/teacher.jsx";
import TeacherProfile from "../components/Teacher/teacher_profile/TeacherProfile.jsx";
import FacultyLeaveApplication from "../components/Teacher/FacultyLeaveApplication/FacultyLeaveApplication.jsx";
import VirtualClassT from "../components/Teacher/VirtualClass/VirtualClass.jsx";
import AttendanceT from "../components/Teacher/Attendance/Attendance.jsx";
import ExamHallAllocation from "../components/Teacher/ExamHallAllocation/ExamHallAllocation.jsx";
import StudentReport from "../components/Teacher/StudentReport/StudentReport.jsx";
import Schedule from "../components/Teacher/Schedule/Schedule.jsx";
import AssignmentT from "../components/Teacher/Assignment_t/Assignment_t.js";

import Student from "../pages/Student/student.jsx";
import StudentProfile from "../components/Students/Student_profile/StudentProfile.jsx";
import Attendance from "../components/Students/Attendance/Attendance.jsx";
import TimeTable from "../components/Students/Timetable_students/Timetable.js";
import GradeAndReport from "../components/Students/GradeAndReport/GradeAndReport.jsx";
import DigitalLibraryMainPage from "../components/Students/DigitalLibrary/digital_library_main_page.jsx";
// import ExamAlerts from "../components/Students/ExamAlerts/ExamAlerts.jsx";
import VirtualClass from "../components/Students/VirtualClass/VirtualClass.jsx";
import Doubt from "../components/Students/DoubtClearance/Doubt.js";
import Assignment from "../components/Students/Assignment/Assignment.js";
import Payment from "../components/Students/PaymentManagement/payment/payment.js";
import FacultyFeedback from "../components/Students/FacultyFeedback/FacultyFeedback.jsx";



//sub-components
import SportsInventory from '../components/Admin/Inventorymanagement/sports/SportsEquipment.js';
import PlumbingInventory from '../components/Admin/Inventorymanagement/plumber/Plumbing.js';
import Maintenance from '../components/Admin/Inventorymanagement/maintenance/Maintenance.js';
import LabEquipment from '../components/Admin/Inventorymanagement/labs/LabEquipment.js';
import ElectricalsInventory from '../components/Admin/Inventorymanagement/electricals/Electricals.js';
import FurnitureInventory from '../components/Admin/Inventorymanagement/furniture/Furniture.js';
>>>>>>> d35c1cad7354b41b2c22a4a623398297b8ec960d

// import FormPage from '../pages/AdmissionForm/AdmissionForm.jsx'
// import TeacherRegistrationForm from "./components/Teacher/form/TeacherRegistrationForm.js";
// import TeacherDetails from './components/Teacher/TeacherDetails.js';

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<Dashboardpage />}>
        {/* <Route index element={<Admin />} /> */}
        <Route path="teacher" element={<TeacherList />} />
        <Route path="students" element={<StudentDetails1 />} />
        <Route path="transport" element={<Transport />} />
        <Route path="finance" element={<Finance />} />

        {/* Inventory Management Sub-Routes */}
        <Route path="inventory" element={<Inventorymain />}>
          <Route path="sports-equipment" element={<SportsInventory />} />
          <Route path="plumbing" element={<PlumbingInventory />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="lab-equipment" element={<LabEquipment />} />
          <Route path="electricals" element={<ElectricalsInventory />} />
          <Route path="furniture" element={<FurnitureInventory />} />
      </Route>

      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher-dashboard" element={<TeacherLayout />}>
        <Route index element={<Teacher />} />
        <Route path="faculty-profile" element={<TeacherProfile />} />
        <Route
          path="faculty-leave-application"
          element={<FacultyLeaveApplication />}
        />
        <Route path="virtual-class" element={<VirtualClassT />} />
        <Route path="attendance-management" element={<AttendanceT />} />
        <Route path="exam-room-allocation" element={<ExamHallAllocation />} />
        <Route path="student-report-card" element={<StudentReport />} />
        <Route path="schedule-management" element={<Schedule />} />
        <Route path="student-assignment" element={<AssignmentT />} />
      </Route>

      {/* Students Routes */}
      <Route path="/student-dashboard" element={<StudentLayout />}>
        <Route index element={<Student />} />
        <Route path="student-profile" element={<StudentProfile />} />
        <Route path="attendance-management" element={<Attendance />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="grades" element={<GradeAndReport />} />
        <Route path="digital-library" element={<DigitalLibraryMainPage />} />
        {/* <Route path='exam-alerts' element={<ExamAlerts/>} /> */}
        <Route path="virtual-classes" element={<VirtualClass />} />
        <Route path="doubt-clearance" element={<Doubt />} />
        <Route path="assignments" element={<Assignment />} />
        <Route path="payment-management" element={<Payment />} />
        <Route path="faculty-feedback" element={<FacultyFeedback />} />
      </Route>

            {/* <Route path="/form" element={<FormPage/>} />
            <Route path="/teacher/:id" element={<TeacherDetails />} />
            <Route path="/teachers/regform" element={<TeacherRegistrationForm/>}/> */}

<<<<<<< HEAD
            </Route>

            {/* Just Added here for testing, need to link in sidebar */}
            {/*
             <Route path='/admin-dashboard-transport' element={<TransportDashboard />} />
            <Route path="/form" element={<FormPage/>} />
            <Route path='/admin-dashboard-transport' element={<TransportDashboard />} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} />
            <Route path="/sports-equipment" element={<SportsInventory/>} />
            <Route path="/plumbing" element={<PlumbingInventory/>} />
            <Route path="/maintenance" element={<Maintenance/>} />
            <Route path="/lab-equipment" element={<LabEquipment/>} />
            <Route path="/furniture" element={<FurnitureInventory/>} />
            <Route path="/electricals" element={<ElectricalsInventory/>} /> 
            
            */}

             <Route path='/ExamAlerts' element={<ExamAlerts />} />

            <Route path="*" element={<ErrorRoutes />} />
        </Routes>
    );
}
=======
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};
>>>>>>> d35c1cad7354b41b2c22a4a623398297b8ec960d

export default PagesRoutes;
