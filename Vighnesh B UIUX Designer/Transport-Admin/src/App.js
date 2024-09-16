import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard-transport/Dashboard';
import DriverProfile from './components/DriverProfile/DriverProfile'; // Driver profile page
import DriversList from './components/DriversList-transport/DriversList'; // Drivers list page
import VehiclesList from './components/VehiclesList-transport/VechiclesList'; // Vehicles list page
import VehicleProfile from './components/VehicleProfile/VehicleProfile'; // Vehicle profile page
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} />

        <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <header className="header">
            <ToggleButton toggleSidebar={toggleSidebar} />
            <Header />
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/drivers" element={<DriversList />} />
            <Route path="/drivers/:driverId" element={<DriverProfile />} />
            <Route path="/vehicles" element={<VehiclesList />} /> {/* Vehicle list route */}
            <Route path="/vehicles/:vehicleId" element={<VehicleProfile />} /> {/* Vehicle profile route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
