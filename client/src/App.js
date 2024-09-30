import { useState } from 'react';
import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import MainPage from '../src/components/Homepage/mainPage';
import Carousel from '../src/components/Homepage/Carousel/carousel';
import Intro from '../src/components/Homepage/Hero/introBox.jsx';
import Navbar from '../src/components/Homepage/Navbar/navbar.jsx';
import PagesRoutes from './Routes/PageRoutes.jsx';
import ErrorRoutes from './Routes/ErrorRoutes.jsx';

function App() {


  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
      </BrowserRouter>
    </ErrorBoundary>

  )
}

export default App
