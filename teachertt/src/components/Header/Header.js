import React, { useState } from 'react';
import './Header.css'; // Import your CSS file
import './Modal.css'; // Import additional CSS for the modal

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <header className="header">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <div className="icon notifications" onClick={openModal}>
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="icon profile">
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </div>
      </header>

      {/* Modal for upcoming events */}
      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Upcoming Events</h2>
            <p>1st Feb Monday - 7th Feb Sunday</p>
            <div className="events-list">
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>Applied Science Homework</h3>
                  <p>2nd of February - Tuesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>Technology Exam</h3>
                  <p>3rd of February - Wednesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>Artificial intelligence Exam</h3>
                  <p>3rd of February - Wednesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>CSI Exam</h3>
                  <p>3rd of February - Wednesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>Data structures Exam</h3>
                  <p>3rd of February - Wednesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-rect"></div>
                <div className="event-info">
                  <h3>Computer Exam</h3>
                  <p>3rd of February - Wednesday</p>
                  <span className="event-time">11:30 - 12:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
