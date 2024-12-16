import React, { useState } from 'react';

const ActionButtons = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      alert(data.message); // Display success message
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="action-buttons">
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button className="btn" onClick={handleUpload}>
        Upload Video
      </button>
      <button className="btn">Schedule Meeting</button>
    </div>
  );
};

export default ActionButtons;
