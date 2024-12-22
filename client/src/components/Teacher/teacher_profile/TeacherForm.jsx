import {
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faBell,
  faGear,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../Students/DigitalLibrary/libraryApp.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import Password from "antd/es/input/Password";

const TeacherForm = () => {
  const [teacherData, setTeacherData] = useState({
    _id: "6702302b4af893c145f00b29",
    full_name: "Archana",
    middle_name: "Archana",
    last_name: "Archana",
    dob: "1991-08-06",
    gender: "female",
    pincode: "",
    nationality: "Indian",
    classAllotted: "10",
    subject: "Science",
    email: "teacher1@gmail.com",
    phoneNumber: "09606392113",
    address: "bangalore",
    photo: "1728196651107.png",
    ugCourse: "BTech",
    ugMajor: "NO",
    ugScore: "82",
    ugYear: 2000,
    ugUniversity: "MIT",
    pgCourse: "MTech",
    pgMajor: "phd",
    pgScore: "8",
    pgYear: 2003,
    pgUniversity: "MIT",
  });

  const { id } = useParams();
  console.log(id);

  const fetchTeacherData = async () => {
    try {
      const response = await axios.get(`/api/teachers/${id}`);
      setTeacherData(response?.data);
      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  useEffect(() => {
    fetchTeacherData();
  }, [id]);

  // console.log(teacherData , "teacherDEtails");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Prefill form fields with profile data
  useEffect(() => {
    Object.keys(teacherData).forEach((key) => {
      setValue(key, teacherData[key]);
    });
  }, [teacherData, setValue]);

  const onSubmit = (data) => {
    updateTeacherDetails(data);
  };

  const updateTeacherDetails = async (data) => {
    
    try {
      const response = await axios.put(`/api/teachers/${id}`, data);
      console.log(response);
      alert("Profile Updated Successfully!")
    } catch (error) {
      console.log(error);
    }
    // Navigate(`/admin-dashboard/teacher/${id}`)
  };

  return (
    <>
      <div className="container-fluid d-flex mt-5">
        <div
          className="text-center d-flex flex-column"
          style={{ width: "20%", marginTop: "-210px", fontWeight: "bolder" }}
        >
          <div>
            <p className="mb-5 text-black fs-4 me-5 fw-bold">
              <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
              Setting
            </p>
          </div>
          <p className="mb-4 fw-bold text-secondary">
            <FontAwesomeIcon icon={faPencilAlt} className="pe-3" />
            Edit Profile
          </p>

          <p className="mb-4 fw-bold">
            <FontAwesomeIcon icon={faBell} className="pe-3" />
            Notification
          </p>
          <p className="mb-4 fw-bold">
            <FontAwesomeIcon icon={faGear} className="pe-3" />
            Appearance
          </p>
          <p className="mb-4 fw-bold">
            <FontAwesomeIcon icon={faQuestionCircle} className="pe-3" />
            Help
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
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label text-start">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("fullName", {
                        required: "First name is required",
                      })}
                      placeholder="Full Name"
                    />
                    {errors.first_name && (
                      <span className="text-danger">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  
                  <div className="col-md-8">
                    <label htmlFor="email" className="form-label text-start">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="dob" className="form-label text-start">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("dob", {
                        required: "Date of birth is required",
                      })}
                    />
                    {errors.dob && (
                      <span className="text-danger">{errors.dob.message}</span>
                    )}
                  </div>
                </div>

                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="subject" className="form-label text-start">
                      Subject of Expertise
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <span className="text-danger">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div className="col-md-8">
                    <label htmlFor="address" className="form-label text-start">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      placeholder="Address"
                    />
                    {errors.address && (
                      <span className="text-danger">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-md-4">
                    <label htmlFor="pincode" className="form-label text-start">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PIN Code"
                      id="pincode"
                      // {...register("pincode", {
                      //   required: "PIN Code is required",
                      // })}
                    />
                  </div>
                  
                  <div className="col-md-4">
                    <label htmlFor="phoneNumber" className="form-label text-start">
                      Contact No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="Phone Number"
                    />
                    {errors.phoneNumber && (
                      <span className="text-danger">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="classAllotted" className="form-label text-start">
                      Managed Classes
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("classAllotted")}
                      placeholder="Class"
                    />
                     {errors.manageClasses && (
                      <span className="text-danger">
                        {errors.manageClasses.message}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark mt-3"
                  style={{ width: "150px", float: "right" }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherForm;
