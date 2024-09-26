/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ErrorRoutes from './ErrorRoutes';
import LandingPage from '../pages/LandingPage';

const PagesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<LandingPage />} />
            {/* <Route path="*" element={<ErrorRoutes />} /> */}
        </Routes>
    );
}

export default PagesRoutes;
