import { useState } from 'react';
import axios from 'axios';
import './profileform.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dob: '',
    subjectOfExpertise: '',
    address: '',
    pincode: '',
    contactNumber: '',
    managedClasses: '',
    city: '',
    state: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/profile', formData);
      console.log('Profile saved:', response.data);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {/* Form fields remain the same as before */}
      ...
      <button type="submit" className="submit-btn">Update</button>
    </form>
  );
};

export default ProfileForm;
