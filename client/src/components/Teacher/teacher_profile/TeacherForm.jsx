import {
  faCircleQuestion,
  faCircleUser,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faBell,
  faGear,
  faPencilAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../../Students/DigitalLibrary/libraryApp.css"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const TeacherForm = ({ teacher, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    first_name: teacher?.first_name || "",
    middle_name: teacher?.middle_name || "",
    last_name: teacher?.last_name || "",
    email: teacher?.email || "",
    dob: teacher?.dob || "",
    subject_expertise: teacher?.subject_expertise || "",
    address: teacher?.address || "",
    pincode: teacher?.pincode || "",
    contact_no: teacher?.contact_no || "",
    managed_classes: teacher?.managed_classes || "",
    city: teacher?.city || "",
    state: teacher?.state || "",
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
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "dob",
      "subject_expertise",
      "address",
      "pincode",
      "contact_no",
      "managed_classes",
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
    if (
      formValues.newpassword &&
      formValues.newpassword !== formValues.confirmpassword
    ) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    // Phone number validation (exactly 9 digits)
    if (formValues.contact_no && !/^\d{10}$/.test(formValues.contact_no)) {
      newErrors.contact_no = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const teacherData = { ...formValues };

    try {
      if (teacher && teacher._id) {
        await axios.put(
          `http://localhost:8000/api/teacherDetails/${teacher._id}`,
          teacherData
        );
      } else {
        await axios.post("http://localhost:8000/api/teacherDetails", teacherData);
      }

      alert("Teacher Profile Updated Successfully");

      setFormValues({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        dob: "",
        subject_expertise: "",
        address: "",
        pincode: "",
        contact_no: "",
        managed_classes: "",
        city: "",
        state: "",
        newpassword: "",
        confirmpassword: "",
      });
      setErrors({});
    } catch (error) {
      console.error(
        "Error updating teacher:",
        error.response?.data || error.message
      );
      alert(
        `Error updating teacher: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <>
      <div className="container-fluid d-flex mt-5">
        <div
          className="text-center"
          style={{ width: "20%", marginTop: "100px", fontWeight: "bolder" }}
        >
          <div>
            <p
              style={{
                marginBottom: "50px",
                color: "black",
                fontSize: "25px",
                marginRight: "100px",
              }}
            >
              <b>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ paddingRight: "10px" }}
                />
                Setting
              </b>
            </p>
          </div>
          <p style={{ marginBottom: "40px" }}>
            <b>
              <FontAwesomeIcon
                icon={faPencilAlt}
                style={{ paddingRight: "10px" }}
              />
              Edit Profile
            </b>
          </p>
          <p style={{ marginBottom: "30px" }}>
            <b>
              <FontAwesomeIcon icon={faBell} style={{ paddingRight: "10px" }} />
              Notification
            </b>
          </p>
          <p style={{ marginBottom: "30px" }}>
            <b>
              <FontAwesomeIcon icon={faGear} style={{ paddingRight: "10px" }} />
              Appearance
            </b>
          </p>
          <p style={{ marginBottom: "30px" }}>
            <b>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                style={{ paddingRight: "10px" }}
              />
              Help
            </b>
          </p>
        </div>
        <div
          style={{
            width: "1px",
            height: "700px",
            backgroundColor: "#808080",
            marginRight: "70px",
          }}
        ></div>

        <div className="right-section" style={{ marginTop: "10px" }}>
          <div
            className="row justify-content-center"
            style={{ width: "100vh" }}
          >
            <div className="form-container">
              <form onSubmit={handleSubmit}>
              <div className="mb-3 form-heading-container d-flex justify-content-between">
                 
                    <h2 className="form-heading">Edit Profile</h2>
                    <button
                      className="btn btn-light"
                      style={{ width: "200px", fontSize: "20px" }}
                    >
                      <FontAwesomeIcon icon={faUserCircle} className="me-3" />
                      Faculty Portal
                    </button>
                
                </div>

                {/* Form fields */}
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label
                      htmlFor="first_name"
                      className="form-label text-start"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      value={formValues.first_name}
                      placeholder="First Name"
                      onChange={handleInputChange}
                    />
                    {errors.first_name && (
                      <div className="text-danger">{errors.first_name}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="middle_name"
                      className="form-label text-start"
                    >
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
                    <label
                      htmlFor="last_name"
                      className="form-label text-start"
                    >
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
                    {errors.last_name && (
                      <div className="text-danger">{errors.last_name}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-4">
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
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div className="col-md-4">
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
                    {errors.dob && (
                      <div className="text-danger">{errors.dob}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="subject_expertise"
                      className="form-label text-start"
                    >
                      Subject of Expertise
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject Name"
                      id="subject_expertise"
                      value={formValues.subject_expertise}
                      onChange={handleInputChange}
                    />
                    {errors.subject_expertise && (
                      <div className="text-danger">
                        {errors.subject_expertise}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-8">
                    <label htmlFor="address" className="form-label text-start">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      value={formValues.address}
                      onChange={handleInputChange}
                    />
                    {errors.address && (
                      <div className="text-danger">{errors.address}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pincode" className="form-label text-start">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PIN Code"
                      id="pincode"
                      value={formValues.pincode}
                      onChange={handleInputChange}
                    />
                    {errors.pincode && (
                      <div className="text-danger">{errors.pincode}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-4">
                    <label
                      htmlFor="contact_no"
                      className="form-label text-start"
                    >
                      Contact No
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control"
                      id="contact_no"
                      value={formValues.contact_no}
                      onChange={handleInputChange}
                    />
                    {errors.contact_no && (
                      <div className="text-danger">{errors.contact_no}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="managed_classes"
                      className="form-label text-start"
                    >
                      Managed Classes
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="managed_classes"
                      placeholder="Managed Classes"
                      value={formValues.managed_classes}
                      onChange={handleInputChange}
                    />
                    {errors.managed_classes && (
                      <div className="text-danger">
                        {errors.managed_classes}
                      </div>
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
                    {errors.city && (
                      <div className="text-danger">{errors.city}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label text-start">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      id="state"
                      value={formValues.state}
                      onChange={handleInputChange}
                    />
                    {errors.state && (
                      <div className="text-danger">{errors.state}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="newpassword"
                      className="form-label text-start"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      id="newpassword"
                      value={formValues.newpassword}
                      onChange={handleInputChange}
                    />
                    {errors.newpassword && (
                      <div className="text-danger">{errors.newpassword}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-6">
                    <label
                      htmlFor="confirmpassword"
                      className="form-label text-start"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      id="confirmpassword"
                      value={formValues.confirmpassword}
                      onChange={handleInputChange}
                    />
                    {errors.confirmpassword && (
                      <div className="text-danger">
                        {errors.confirmpassword}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="p_btn">
                  <button
                    type="submit"
                    className="btn btn-dark me-3"
                    style={{ width: "150px" }}
                  >
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

export default TeacherForm;
