import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faPencilAlt,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const StudentForm = ({ student, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    first_name: student?.first_name || "",
    middle_name: student?.middle_name || "",
    last_name: student?.last_name || "",
    email: student?.email || "",
    dob: student?.dob || "",
    class_grade: student?.class_grade || "",
    address: student?.address || "",
    pincode: student?.pincode || "",
    contact_no: student?.contact_no || "",
    parent_contact_no: student?.parent_contact_no || "",
    city: student?.city || "",
    state: student?.state || "",
    newpassword: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "dob",
      "class_grade",
      "address",
      "pincode",
      "contact_no",
      "parent_contact_no",
      "city",
      "state",
    ];

    requiredFields.forEach((field) => {
      if (!formValues[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email format validation
    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password length validation
    if (formValues.newpassword && formValues.newpassword.length < 6) {
      newErrors.newpassword = "Password must be at least 6 characters long";
    }

    // Password matching validation
    if (formValues.newpassword && formValues.newpassword !== formValues.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    // Phone number validation (9 digits only)
    const phoneFields = ["contact_no", "parent_contact_no"];
    phoneFields.forEach((field) => {
      if (formValues[field] && !/^\d{10}$/.test(formValues[field])) {
        newErrors[field] = "Phone number must be exactly 10 digits";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const studentData = { ...formValues };

    if (student) {
      await axios.put(`http://localhost:5000/students/${student._id}`, studentData);
    } else {
      await axios.post("http://localhost:5000/students", studentData);
    }

    alert("Student Profile Updated Successfully");

    // Reset the form values after successful submission
    setFormValues({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      dob: "",
      class_grade: "",
      address: "",
      pincode: "",
      contact_no: "",
      parent_contact_no: "",
      city: "",
      state: "",
      newpassword: "",
      confirmpassword: "",
    });
    setErrors({});
  };

  return (
    <>
      <div className="fullcontainer">
        <div className="mid-section">
          <p>
            <b>
              <FontAwesomeIcon icon={faPencilAlt} style={{ paddingRight: "10px" }} />
              Edit Profile
            </b>
          </p>
          <p>
            <b>
              <FontAwesomeIcon icon={faBell} style={{ paddingRight: "10px" }} />
              Notification
            </b>
          </p>
          <p>
            <b>
              <FontAwesomeIcon icon={faGear} style={{ paddingRight: "10px" }} />
              Appearance
            </b>
          </p>
          <p>
            <b>
              <FontAwesomeIcon icon={faQuestionCircle} style={{ paddingRight: "10px" }} />
              Help
            </b>
          </p>
          <div className="vl"></div>
        </div>

        <div className="right-section">
          <div className="row justify-content-center">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-heading-container">
                  <div className="top_edit">
                    <h2 className="form-heading">Edit Profile</h2>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </div>
                </div>

                {/* Name Fields */}
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="first_name" className="form-label text-start">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="First Name"
                      value={formValues.first_name}
                      onChange={handleInputChange}
                    />
                    {errors.first_name && <small className="text-danger">{errors.first_name}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="middle_name" className="form-label text-start">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="middle_name"
                      placeholder="Middle Name"
                      value={formValues.middle_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="last_name" className="form-label text-start">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      placeholder="Last Name"
                      value={formValues.last_name}
                      onChange={handleInputChange}
                    />
                    {errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                  </div>
                </div>

                {/* Email and DOB */}
                <div className="row mb-1">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-start">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="dob" className="form-label text-start">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      value={formValues.dob}
                      onChange={handleInputChange}
                    />
                    {errors.dob && <small className="text-danger">{errors.dob}</small>}
                  </div>
                </div>

                {/* Class, Address, and PIN Code */}
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="class_grade" className="form-label text-start">
                      Class and Section
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="class_grade"
                      placeholder="Class and Section"
                      value={formValues.class_grade}
                      onChange={handleInputChange}
                    />
                    {errors.class_grade && <small className="text-danger">{errors.class_grade}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="address" className="form-label text-start">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      value={formValues.address}
                      onChange={handleInputChange}
                    />
                    {errors.address && <small className="text-danger">{errors.address}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pincode" className="form-label text-start">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      placeholder="PIN Code"
                      value={formValues.pincode}
                      onChange={handleInputChange}
                    />
                    {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="contact_no" className="form-label text-start">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact_no"
                      placeholder="Contact Number"
                      value={formValues.contact_no}
                      onChange={handleInputChange}
                    />
                    {errors.contact_no && <small className="text-danger">{errors.contact_no}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="parent_contact_no" className="form-label text-start">
                      Parent's Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="parent_contact_no"
                      placeholder="Parent's Contact Number"
                      value={formValues.parent_contact_no}
                      onChange={handleInputChange}
                    />
                    {errors.parent_contact_no && (
                      <small className="text-danger">{errors.parent_contact_no}</small>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label text-start">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={formValues.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && <small className="text-danger">{errors.city}</small>}
                  </div>
                </div>

                {/* State, Password, and Confirm Password */}
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label text-start">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="State"
                      value={formValues.state}
                      onChange={handleInputChange}
                    />
                    {errors.state && <small className="text-danger">{errors.state}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="newpassword" className="form-label text-start">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newpassword"
                      placeholder="New Password"
                      value={formValues.newpassword}
                      onChange={handleInputChange}
                    />
                    {errors.newpassword && <small className="text-danger">{errors.newpassword}</small>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="confirmpassword" className="form-label text-start">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmpassword"
                      placeholder="Confirm Password"
                      value={formValues.confirmpassword}
                      onChange={handleInputChange}
                    />
                    {errors.confirmpassword && (
                      <small className="text-danger">{errors.confirmpassword}</small>
                    )}
                  </div>
                </div>
<br/><br/>
                {/* Submit Button */}
                <div className="p_btn">
                  <button
                    type="button"
                    className="btn btn-light me-3"
                    style={{ width: "150px", borderColor: "black" }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-dark me-3" style={{ width: "150px" }}>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
