// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Calendar from './components/Calender/Calender';
import Timetable from './components/Timetable/Timetable';
import FacultyMembers from './components/FacultyMembers/FacultyMembers';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Header from './components/Header/Header';
import './App.css'; // Import the global styles

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="content">
        <header className="header">
          <ToggleButton toggleSidebar={toggleSidebar} />
          <div className="App">
      <Header />
      
    </div>
          
        </header>
        <main>
          <h1>Weekly Course Schedule</h1>


         
          <div className='timetable-container'>
          <Timetable />
          </div>
          
         
          
          <div className="right-side">
            
              <Calendar />
           
            
          </div>
          
        </main>
        <div className="">
            <div className='faculty-members'>
            <FacultyMembers />
            </div>
              
            </div>
      </div>
    </div>
  );
}

export default App;
