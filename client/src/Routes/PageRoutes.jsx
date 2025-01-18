/* eslint-disable no-unused-vars */
import React from "react";

import { Route, Routes } from "react-router-dom";
import ErrorRoutes from "./ErrorRoutes";

import Dashboardpage from "../components/Layouts/Dashboardpage.jsx";
import LandingPage from "../pages/LandingPage/LandingPage";
import StudentLayout from "../pages/Student/StudentAdminLayout.jsx";
import TeacherLayout from "../pages/Teacher/TeacherAdminLayout.jsx";

// import Admin from "../pages/AdminDashboard/Admin.jsx";
import Finance from "../components/Admin/Finance/Finance.jsx";
import TeacherList from "../components/Admin/Teacher-Details/card/TeacherList.js";
import Inventorymain from "../pages/AdminDashboard/InventoryManagement/Inventorymain.js";
import StudentDetails1 from "../pages/AdminDashboard/Stu-Details-1.jsx";
import Transport from "../pages/AdminDashboard/Transport/Transport.jsx";

import AssignmentT from "../components/Teacher/Assignment_t/Assignment_t.js";
import AttendanceT from "../components/Teacher/Attendance/Attendance.jsx";
import ExamHallAllocation from "../components/Teacher/ExamHallAllocation/ExamHallAllocation.jsx";
import FacultyPage from "../components/Teacher/FacultyLeave/facultyLeave.jsx";
import Schedule from "../components/Teacher/Schedule/Schedule.jsx";
import StudentReport from "../components/Teacher/StudentReport/StudentReport.jsx";
import TeacherProfile from "../components/Teacher/teacher_profile/TeacherProfile.jsx";
import VirtualPage from "../components/Teacher/Virtualclass/virtual_class.jsx";
import Teacher from "../pages/Teacher/teacher.jsx";

import Attendance from "../components/Students/Attendance/Attendance.jsx";
import DigitalLibraryMainPage from "../components/Students/DigitalLibrary/digital_library_main_page.jsx";
import ExamAlerts from "../components/Students/ExamAlerts/ExamAlerts.jsx";
import GradeAndReport from "../components/Students/GradeAndReport/GradeAndReport.jsx";
import StudentProfile from "../components/Students/Student_profile/StudentProfile.jsx";
import TimeTable from "../components/Students/Timetable_students/Timetable.js";
import Student from "../pages/Student/student.jsx";

import Assignment from "../components/Students/Assignment/Assignment.js";
import Doubt from "../components/Students/DoubtClearance/Doubt.js";
import FacultyFeedback from "../components/Students/FacultyFeedback/FacultyFeedback.jsx";
import Payment from "../components/Students/PaymentManagement/payment/payment.js";
import sub_payment from "../components/Students/PaymentManagement/sub_payment/sub_payment.js";

//sub-components
import ElectricalsInventory from '../components/Admin/Inventorymanagement/electricals/Electricals.js';
import FurnitureInventory from '../components/Admin/Inventorymanagement/furniture/Furniture.js';
import LabEquipment from '../components/Admin/Inventorymanagement/labs/LabEquipment.js';
import Maintenance from '../components/Admin/Inventorymanagement/maintenance/Maintenance.js';
import PlumbingInventory from '../components/Admin/Inventorymanagement/plumber/Plumbing.js';
import SportsInventory from '../components/Admin/Inventorymanagement/sports/SportsEquipment.js';

import FormPage from '../pages/AdmissionForm/AdmissionForm.jsx'
import AdminDashboardPage from "../pages/AdminDashboard/Dashboard/AdminDashboardPage.jsx";
import TeacherRegistrationForm from "../components/Admin/Teacher-Details/form/TeacherRegistrationForm.js";
import TeacherDetails from "../components/Admin/Teacher-Details/profilecard/ProfileList.js";
import Dashboard from "../components/Admin/Teacher-Details/TeacherDetails.js";
// import TeacherRegistrationForm from "./components/Teacher/form/TeacherRegistrationForm.js";
// import TeacherDetails from './components/Teacher/TeacherDetails.js';

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/form" element={<FormPage />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<Dashboardpage />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="teachersregform" element={<TeacherRegistrationForm />} />

        <Route path="teacher" element={<TeacherList />} />
        <Route path="teacher/:id" element={<Dashboard/>} />

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
        <Route path="faculty-leave-application" element={<FacultyPage />} />
        <Route path="virtual-class" element={<VirtualPage/>} />
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
        <Route path="exam-alerts" element={<ExamAlerts />} />
        <Route path="virtual-classes" element={<VirtualClassS />} />
        <Route path="doubt-clearance" element={<Doubt />} />
        <Route path="assignments" element={<Assignment />} />
        <Route path="payment-management" element={<Payment />} />
        <Route path="faculty-feedback" element={<FacultyFeedback />} />
        <Route path="sub_payment" element={<sub_payment />} />
      </Route>

      {/*
            <Route path="/teacher/:id" element={<TeacherDetails />} />
            <Route path="/teachers/regform" element={<TeacherRegistrationForm/>}/> 
            */}

      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export default PagesRoutes;