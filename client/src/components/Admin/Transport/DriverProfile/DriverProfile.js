import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DriverProfile.css';
const DriverProfile = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showNewDriverModal, setShowNewDriverModal] = useState(false);
  const [paymentType, setPaymentType] = useState('');
  const [newDriver, setNewDriver] = useState({
    name: '',
    role: '',
    address: '',
    experience: '',
    contact: '',
    email: '',
    phone: ''
  });

  const handlePaymentClick = (type) => {
    setPaymentType(type);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentType('');
  };

  const handleNewDriverClick = () => {
    setShowNewDriverModal(true);
  };

  const closeNewDriverModal = () => {
    setShowNewDriverModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  // Modified handleNewDriverSubmit to connect to backend
  const handleNewDriverSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API request to your backend to add a new driver
      const response = await axios.post('/api/drivers', newDriver);

      // Log the response from the backend
      console.log('New driver added:', response.data);

      // Close the modal after successful submission
      closeNewDriverModal();

      // Optionally, you could refresh the drivers list here to update the UI
    } catch (error) {
      console.error('Error adding new driver:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="driver-profile-container">
      <div className="main-content">
        <div className="header-container">
          <h1 className="page-title">Transportation</h1>
          <Link to="/">
            <button className="back-btn">← Back</button>
          </Link>
        </div>

        <div className="driver-profile-header">
          <h2>Driver Profile</h2>
          <button className="new-driver-btn" onClick={handleNewDriverClick}>
            + New Driver
          </button>
        </div>

        <div className="profile-section">
          <div className="driver-info">
            <div className="driver-card">
              <img
                className="driver-img"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Driver"
              />
              <h3>Alfonso Bator</h3>
              <p className="driver-role">Driver</p>
              <p className="driver-address">
                750 Sarah Drive Sulphur, India 70663
              </p>
              <div className="rating">
                <span>4.3</span>
                <span>★ ★ ★ ★ ☆</span>
              </div>
              <p className="experience">
                <strong>Experience:</strong> 5 years
              </p>
              <p className="contact">
                <strong>Contact:</strong> <br />
                Kerala, India <br />
                Alphonsa@mail.com <br />
                +12 345 6789 0
              </p>
            </div>
          </div>

          <div className="vehicle-info">
            <div className="vehicle-card">
              <h3>Vehicle</h3>
              <img
                className="vehicle-img"
                src="https://jcbl.com/jcbl-images/products/school-bus/school%20banner.jpg"
                alt="Bus"
              />
              <p>
                <strong>Bus No:</strong> 1
              </p>
              <div>
                <p>
                  <strong>Number Plate:</strong> TN 2810 010-00
                </p>
              </div>
              <p>
                <strong>Timings:</strong> 6 AM, 2 PM, 3 PM
              </p>
              <p>
                <strong>Current Students:</strong> 30
              </p>
            </div>
          </div>

          <div className="payments-section">
            <h3>Payments</h3>
            <button
              onClick={() => handlePaymentClick('Driver Salary')}
              className="payment-btn"
            >
              Driver Salary
            </button>
            <button
              onClick={() => handlePaymentClick('Fuel Costs')}
              className="payment-btn"
            >
              Fuel Costs
            </button>
            <button
              onClick={() => handlePaymentClick('Bus Maintenance')}
              className="payment-btn"
            >
              Bus Maintenance
            </button>
            <button
              onClick={() => handlePaymentClick('Damage Cover')}
              className="payment-btn"
            >
              Damage Cover
            </button>
            <button
              onClick={() => handlePaymentClick('Insurance')}
              className="payment-btn"
            >
              Insurance
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="overlay" onClick={closePaymentModal}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Pay for {paymentType}</h2>
            <p>Enter the amount and complete the payment.</p>
            <input type="number" placeholder="Enter Amount" />
            <div>
              <button className="pay-btn">Proceed to Pay</button>
              <button className="cancel-btn" onClick={closePaymentModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Driver Modal */}
      {showNewDriverModal && (
        <div className="overlay" onClick={closeNewDriverModal}>
          <div className="new-driver-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Driver</h2>
            <form onSubmit={handleNewDriverSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Driver Name"
                value={newDriver.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={newDriver.role}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newDriver.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience (years)"
                value={newDriver.experience}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Location"
                value={newDriver.contact}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newDriver.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={newDriver.phone}
                onChange={handleInputChange}
                required
              />
              <div>
                <button type="submit" className="add-btn">
                  Add Driver
                </button>
                <button type="button" className="cancel-btn" onClick={closeNewDriverModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;
