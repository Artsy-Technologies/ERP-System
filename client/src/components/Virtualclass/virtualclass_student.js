import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Add PropTypes for type-checking


import Sidebar from '../../pages/Teacher/Sidebar.jsx';
import Header from '../../pages/Teacher/header.jsx';
import './virtualclass.css';



// Video Card Component
const VideoCard = ({ video }) => {
  const { title, duration, type, image, link } = video;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="video-card-link">
      <div className="video-card">
        <img src={image} alt={title} className="video-image" />
        <div className="video-info">
          <h3>{title}</h3>
          <p>{duration}</p>
          <p>{type}</p>
        </div>
      </div>
    </a>
  );
};


VideoCard.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Video Grid Component
const VideoGrid = () => (
  <div className="video-grid">
    <h2>Recent Uploads</h2>
    <div className="grid">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  </div>
);

const videos = [
  {
    title: 'Cloud Computing Fundamentals Full Course',
    duration: '2 hrs',
    type: 'Recorded',
    image: 'https://img.youtube.com/vi/mxT233EdY5c/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=mxT233EdY5c'
  },
  {
    title: 'How to become a Blockchain Developer in 2022?',
    duration: '2 hrs',
    type: 'Recorded',
    image: 'https://img.youtube.com/vi/uULy2rc6YDc/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=uULy2rc6YDc'
  },
  {
    title: '3 Levels of Cyber Security GRC jobs',
    duration: '2 hrs',
    type: 'Recorded',
    image: 'https://img.youtube.com/vi/GVMzQgxHWEw/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=GVMzQgxHWEw'
  },
  {
    title: 'FULL Web3 Roadmap in 2023',
    duration: '2 hrs',
    type: 'Recorded',
    image: 'https://img.youtube.com/vi/8NeZgmSfbYg/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=8NeZgmSfbYg'
  },
  {
    title: 'Data Structures and Algorithms (DSA) in Java 2024',
    duration: '2 hrs',
    type: 'Recorded',
    image: 'https://img.youtube.com/vi/4_HOnhB64Dg/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=4_HOnhB64Dg'
  },
  // Add other video objects here...
];

// Virtual Page Component (Main)
const VirtualPageStudent = () => (
  <div className="App">
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <VideoGrid />
      </div>
    </div>
  </div>
);

export default VirtualPageStudent;
