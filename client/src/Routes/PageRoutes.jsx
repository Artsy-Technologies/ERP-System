/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorRoutes from './ErrorRoutes';
import LandingPage from '../pages/LandingPage/LandingPage'
// import TransportDashboard from '../pages/AdminDashboard/Transport/Transport'

const PagesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<LandingPage />} />

            {/* <Route path='/admin-dashboard-transport' element={<TransportDashboard />} /> Just Added here for testing, need to link in sidebar */}

            <Route path="*" element={<ErrorRoutes />} />
        </Routes>
    );
}

export default PagesRoutes;