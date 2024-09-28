import React from "react";
import { Link } from "react-router-dom";
import "./DriversList.css";

const drivers = [
  {id: '1', name: "Alfonso Bator", location: "Sulphur, LA" },
  {id: '1', name: "Angel Kenter", location: "Tacoma, WA" },
  {id: '1', name: "Alfonso Bator", location: "Sulphur, LA" },
  {id: '1', name: "Angel Kenter", location: "Tacoma, WA" },
  {id: '1', name: "Alfonso Bator", location: "Sulphur, LA" },
  {id: '1', name: "Angel Kenter", location: "Tacoma, WA" },
  
  // Add more drivers as necessary
];


const DriversList = () => {
  return (
    <div className="drivers-list">
      {drivers.map((driver) => (
        <div className="driver-item" key={driver.id}>
          <Link to={`/drivers/${driver.id}`}>
            <p>{driver.name}</p>
            <p>{driver.location}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DriversList;
