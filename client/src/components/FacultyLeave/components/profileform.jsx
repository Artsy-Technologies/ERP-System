import { useState } from 'react';
import '/profileform.css';

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
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Profile saved successfully');
      } else {
        console.error('Failed to save profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {/* Row for Name Fields */}
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
      </div>

      {/* Other Fields */}
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>DOB</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Subject of Expertise</label>
        <input type="text" name="subjectOfExpertise" value={formData.subjectOfExpertise} onChange={handleChange} />
      </div>

      {/* Row for Address and Pincode */}
      <div className="form-row">
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
      </div>

      {/* Row for Managed Classes and City */}
      <div className="form-row">
        <div className="form-group">
          <label>Managed Classes</label>
          <input type="text" name="managedClasses" value={formData.managedClasses} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group">
        <label>State</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option value="State1">State1</option>
          <option value="State2">State2</option>
          {/* Add more states as needed */}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>New Password</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
      </div>

      <button type="submit" className="submit-btn">Update</button>
    </form>
  );
};

export default ProfileForm;
