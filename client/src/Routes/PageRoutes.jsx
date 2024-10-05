/* eslint-disable no-unused-vars */
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ErrorRoutes from './ErrorRoutes';
import LandingPage from '../pages/LandingPage/LandingPage'
import Student from '../pages/Student/student.jsx'
import Teacher from '../pages/Teacher/teacher.jsx';
import Dashboardpage from '../components/Layouts/Dashboardpage.jsx';

// import TransportDashboard from '../pages/AdminDashboard/Transport/Transport'
// import FormPage from '../pages/AdmissionForm/AdmissionForm.jsx'
// import ExamHallAllocation from '../components/Teacher/Exam Hall Allocation/ExamHallAllocation.js';
// import Inventorymain from '../pages/AdminDashboard/Transport/InventoryManagement/Inventorymain.js';
// import SportsInventory from '../components/Admin/Inventorymanagement/sports/SportsEquipment.js';
// import PlumbingInventory from '../components/Admin/Inventorymanagement/plumber/Plumbing.js';
// import Maintenance from '../components/Admin/Inventorymanagement/maintenance/Maintenance.js';
// import LabEquipment from '../components/Admin/Inventorymanagement/labs/LabEquipment.js';
// import ElectricalsInventory from '../components/Admin/Inventorymanagement/electricals/Electricals.js';
// import FurnitureInventory from '../components/Admin/Inventorymanagement/furniture/Furniture.js';


const PagesRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<LandingPage />} />


            <Route path='/' element={<Dashboardpage />} >
                <Route path="student-dashboard" element={<Student />} />
                <Route path="teacher-dashboard" element={<Teacher />} />

            </Route>

            {/* Just Added here for testing, need to link in sidebar */}
            {/*
             <Route path='/admin-dashboard-transport' element={<TransportDashboard />} />
            <Route path="/form" element={<FormPage/>} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} />
            <Route path="/exam-hall-allocation" element={<ExamHallAllocation/>} />
            <Route path="/Inventorymain" element={<Inventorymain/>} />
            <Route path="/sports-equipment" element={<SportsInventory/>} />
            <Route path="/plumbing" element={<PlumbingInventory/>} />
            <Route path="/maintenance" element={<Maintenance/>} />
            <Route path="/lab-equipment" element={<LabEquipment/>} />
            <Route path="/furniture" element={<FurnitureInventory/>} />
            <Route path="/electricals" element={<ElectricalsInventory/>} /> 
            
            */}


            <Route path="*" element={<ErrorRoutes />} />
        </Routes>
    );
}

export default PagesRoutes;

