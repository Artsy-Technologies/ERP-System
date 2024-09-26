import React from 'react';
import { Routes, Route } from 'react-router-dom';


const ErrorRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {/* <Route path="/500" element={<InternalServerErrorPage />} /> */}
    </Routes>
  );
};

export default ErrorRoutes;
