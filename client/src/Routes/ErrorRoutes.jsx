import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from "../pages/PageNotFound"

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="/500" element={<InternalServerErrorPage />} /> */}
    </Routes>
  );
};

export default ErrorRoutes;