import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SidebarS from './components/SidebarS/SidebarS';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Header from './components/Header/Header';
import ProfileS from './components/ProfileS/ProfileS';
import Attendance from './components/Attendance/Attendance';
import Timetable from './components/Timetable/Timetable';
import Grade from './components/Grade/Grade';
import Library from './components/Library/Library';
import ExamAlerts from './components/ExamAlert/ExamAlert';
import Classes from './components/Classes/Classes';
import DoubtClearance from './components/Doubt/Doubt';
import Assignments from './components/Assignment/Assignment';
import Payment from './components/payment/payment';
import Feedback from './components/Feedback/Feedback';
import Sub_payment from './components/sub_payment/sub_payment';
import Assignment_t from './components/Assignment_t/Assignment_t';
import SidebarT from './components/SidebarT/SidebarT';
import SidebarA from './components/SidebarA/SidebarA';

import '@fortawesome/fontawesome-free/css/all.min.css';



import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="app">
      <BrowserRouter>
        <SidebarS isOpen={isSidebarOpen} />
        <header className="header">
          <ToggleButton toggleSidebar={toggleSidebar} />
          <Header />
        </header>
   
        
        <div>
          <Routes>
            <Route path='/ProfileS' element={<ProfileS />} />
            <Route path='/Attendance' element={<Attendance />} />
            <Route path='/Timetable' element={<Timetable />} />
            <Route path='/Grade' element={<Grade />} />
            <Route path='/Library' element={<Library />} />
            <Route path='/ExamAlert' element={<ExamAlerts />} />
            <Route path='/Classes' element={<Classes />} />
            <Route path='/Doubt' element={<DoubtClearance />} /> {/* Render Doubt component here */}
            <Route path='/Assignments' element={<Assignments />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Feedback' element={<Feedback />} />
            <Route path ='/sub_payment'element={<Sub_payment />}/>
            <Route path ='/Assignment_t'element={<Assignment_t />}/>
            <Route path ='/SidebarT'element={<SidebarT/>}/>
            <Route path ='/SidebarA'element={<SidebarA/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
