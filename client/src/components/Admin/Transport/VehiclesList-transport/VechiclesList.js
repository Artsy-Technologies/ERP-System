import React from "react";
import { useNavigate } from 'react-router-dom';
import "./VehiclesList.css";

const vehicles = [
  { number: "KA-01-A-1234", color: "Red", location: "Sulphur, LA", id: 1 },
  { number: "KA-05-B-5678", color: "Blue", location: "Tacoma, WA", id: 2 },
  { number: "KA-09-C-9012", color: "Green", location: "Austin, TX", id: 3 },
  // Add more vehicles as necessary
];

const VehiclesList = () => {
  const navigate = useNavigate();

  const handleVehicleClick = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <div className="vehicles-list">
      {vehicles.map((vehicle) => (
        <div
          className="vehicle-item"
          key={vehicle.id}
          onClick={() => handleVehicleClick(vehicle.id)}
        >
          <p>{vehicle.number}</p>
          <p>{vehicle.color}</p>
          <p>{vehicle.location}</p>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
