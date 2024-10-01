import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeacherRegistrationForm.css";

const TeacherRegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container form-container">
      <h2 className="form-header text-center">Teacher Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="teacher-form">
        <div className="row">
          {/* Teacher Details Section */}
          <div className="col-md-6">
            <div className="section-header text-center mb-3">Teacher Details</div>

            <div className="form-group mb-3">
              <label>Full Name:</label>
              <input
                className="form-control"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Date of Birth:</label>
              <input
                type="date"
                className="form-control"
                {...register("dob", { required: true })}
              />
              {errors.dob && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Gender:</label>
              <input
                className="form-control"
                {...register("gender", { required: true })}
              />
              {errors.gender && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Nationality:</label>
              <input
                className="form-control"
                {...register("nationality", { required: true })}
              />
              {errors.nationality && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Class Allotted:</label>
              <input
                className="form-control"
                {...register("classAllotted", { required: true })}
              />
              {errors.classAllotted && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Subject:</label>
              <input
                className="form-control"
                {...register("subject", { required: true })}
              />
              {errors.subject && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Email:</label>
              <input
                className="form-control"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Phone Number:</label>
              <input
                className="form-control"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Address:</label>
              <textarea
                className="form-control"
                rows="3"
                {...register("address", { required: true })}
              ></textarea>
              {errors.address && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
              <label>Photo:</label>
              <input type="file" className="form-control" {...register("photo")} />
            </div>
          </div>

          {/* Educational Details Section */}
          <div className="col-md-6">
            <div className="section-header text-center mb-3">Educational Details</div>

            {/* Undergraduate Details */}
            <div className="mb-4">
              <div className="subsection-header text-danger mb-2">Undergraduate Details</div>

              <div className="form-group mb-3">
                <label>UG Course:</label>
                <input className="form-control" {...register("ugCourse", { required: true })} />
                {errors.ugCourse && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Major:</label>
                <input className="form-control" {...register("ugMajor", { required: true })} />
                {errors.ugMajor && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Score:</label>
                <input className="form-control" {...register("ugScore", { required: true })} />
                {errors.ugScore && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Year of Passing:</label>
                <input
                  className="form-control"
                  type="number"
                  {...register("ugYear", { required: true })}
                />
                {errors.ugYear && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>University Name and Address:</label>
                <textarea
                  className="form-control"
                  rows="2"
                  {...register("ugUniversity", { required: true })}
                ></textarea>
                {errors.ugUniversity && <span className="text-danger">This field is required</span>}
              </div>
            </div>

            {/* Postgraduation Details */}
            <div className="mb-4">
              <div className="subsection-header text-danger mb-2">Postgraduation Details</div>

              <div className="form-group mb-3">
                <label>PG Course:</label>
                <input className="form-control" {...register("pgCourse", { required: true })} />
                {errors.pgCourse && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Major:</label>
                <input className="form-control" {...register("pgMajor", { required: true })} />
                {errors.pgMajor && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Score:</label>
                <input className="form-control" {...register("pgScore", { required: true })} />
                {errors.pgScore && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>Year of Passing:</label>
                <input
                  className="form-control"
                  type="number"
                  {...register("pgYear", { required: true })}
                />
                {errors.pgYear && <span className="text-danger">This field is required</span>}
              </div>

              <div className="form-group mb-3">
                <label>University Name and Address:</label>
                <textarea
                  className="form-control"
                  rows="2"
                  {...register("pgUniversity", { required: true })}
                ></textarea>
                {errors.pgUniversity && <span className="text-danger">This field is required</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn sendbutton  btn-danger mt-4">+ New Teacher</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegistrationForm;
