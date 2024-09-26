import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VehicleProfile.css';

const VehicleProfile = () => {
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [busModel, setBusModel] = useState('');
  const [driverName, setDriverName] = useState('');
  const [numberPlate, setNumberPlate] = useState('');

  const handleSaveRoute = () => {
    if (startPoint && destination) {
      const url = `https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(startPoint)}&destination=${encodeURIComponent(destination)}&mode=driving`;
      setMapUrl(url);
    } else {
      alert("Please enter both starting point and destination.");
    }
  };

  const handleAddNewBus = () => {
    if (busModel && driverName && numberPlate) {
      // Handle saving the new bus details here (could involve an API call or updating state)
      alert(`New Bus Added: \nModel: ${busModel}\nDriver: ${driverName}\nNo.Plate: ${numberPlate}`);
      setShowModal(false);
      // Reset form fields
      setBusModel('');
      setDriverName('');
      setNumberPlate('');
    } else {
      alert("Please fill in all the bus details.");
    }
  };

  return (
    <div className="vehicleProfileContainer">
      <div className="mainContent">
        <div className="headerContainer">
          <h1 className="pageTitle">Transportation</h1>
          <Link to="/">
            <button className="backBtn">← Back</button>
          </Link>
        </div>

        <div className="profileSection">
          <div className="vehicleInfo">
            <div className="vehicleCard">
              <img
                className="vehicleImg"
                src="https://jcbl.com/jcbl-images/products/school-bus/school%20banner.jpg"
                alt="Bus"
              />
              <div className="text">
                <p><strong>Bus No:</strong> 1</p>
                <p><strong>Model:</strong> JCBL Happy Bus</p>
                <p><strong>No.Plate:</strong> TN 2810 010-00</p>
                <p><strong>Current Driver:</strong> Alfonso Bator</p>
                <p><strong>Vehicle Status:</strong> In Use</p>
                <p><strong>Last Maintenance:</strong> Aug 30, 2024</p>
              </div>
            </div>
            <div className="vehicleStatistics">
              <h3>Statistics</h3>
              <div className="stats">
                <div className="statItem">
                  <h4>22.7 Kms</h4>
                  <p>Average</p>
                </div>
                <div className="statItem">
                  <h4>92581 km</h4>
                  <p>Distance Travelled</p>
                </div>
                <div className="statItem">
                  <h4>6.5L</h4>
                  <p>Average</p>
                </div>
                <div className="statItem">
                  <h4>17.5L</h4>
                  <p>Fuel Left</p>
                </div>
              </div>
            </div>

            {/* Button to open modal for adding a new bus */}
            <button className="addBusBtn" onClick={() => setShowModal(true)}>
              Add New Bus
            </button>
          </div>

          <div className="routePlanning">
            <h3>Route Planning</h3>
            {mapUrl ? (
              <iframe
                title="Google Maps Directions"
                src={mapUrl}
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              />
            ) : (
              <p>No route selected</p>
            )}
            <div className="routeInputs">
              <input
                type="text"
                placeholder="Enter starting point"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <button className="saveRouteBtn" onClick={handleSaveRoute}>
                Set Route
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding new bus */}
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h3>Add New Bus</h3>
            <input
              type="text"
              placeholder="Bus Model"
              value={busModel}
              onChange={(e) => setBusModel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Driver Name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number Plate"
              value={numberPlate}
              onChange={(e) => setNumberPlate(e.target.value)}
            />
            <button className="saveBusBtn" onClick={handleAddNewBus}>
              Save Bus
            </button>
            <button className="cancelBtn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleProfile;
