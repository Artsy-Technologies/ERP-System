import { useState } from 'react';
import ErrorBoundary from './errorBoundary';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from '../src/components/Homepage/mainPage';
import Carousel from '../src/components/Homepage/Carousel/carousel';
import Intro from '../src/components/Homepage/Hero/introBox.jsx';
import Navbar from '../src/components/Homepage/Navbar/navbar.jsx';

function App() {
  

  return (
    <>
    <ErrorBoundary>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<MainPage/>} />
      <Route path='/carousel' element={<Carousel/>} />
      <Route path='/intro' element={<Intro/>} />
      <Route path='/navbar' element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
        
    </>
  )
}

export default App
