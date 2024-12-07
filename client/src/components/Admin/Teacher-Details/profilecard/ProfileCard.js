import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ProfileCard.css";

const ProfileCard = ({ teacher }) => {
  // Check if teacher is defined and provide default values
  if (!teacher) {
    return <div>No teacher data available.</div>; // Fallback if teacher is undefined
  }

  // Create expertise based on available information
  const expertise = teacher.subject ? [teacher.subject] : []; // Adjust based on your logic
  const education = [
    {
      degree: teacher.ugCourse,
      institution: teacher.ugUniversity,
      year: teacher.ugYear,
    },
    {
      degree: teacher.pgCourse,
      institution: teacher.pgUniversity,
      year: teacher.pgYear,
    },
  ]; // Construct education array

  return (
    <div className="profile-card">
      <div className="card-header bg-primary text-white">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={`http://localhost:8000/uploads/${teacher.photo}`} // Combine the base URL with the photo filename
              alt="Profile"
              className="rounded-circle profile-img"
            />
          </div>
          <div className="col-md-8">
            <h2 className="name">{teacher.fullName}</h2>
            <p className="role">{teacher.subject}</p> {/* You may want to change this */}
          </div>
        </div>
      </div>

      <div className="card-body">
        <section className="details-section">
          <h3>Details</h3>
          <div className="row">
            <div className="col-6">
              <p><strong>DOB:</strong> {teacher.dob.split("T")[0]}</p> {/* Format DOB */}
              <p><strong>Class:</strong> {teacher.classAllotted}</p> {/* Use correct property */}
            </div>
            <div className="col-6">
              <p><strong>Subject:</strong> {teacher.subject}</p>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h3>Education</h3>
          {education.length > 0 ? (
            education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
              </p>
            ))
          ) : (
            <p>No education information available.</p> // Fallback if education is empty
          )}
        </section>

        <section className="expertise-section">
          <h3>Expertise</h3>
          {expertise.length > 0 ? (
            <p>{expertise.join(", ")}</p>
          ) : (
            <p>N/A</p> // Display N/A if no expertise
          )}
        </section>

        <section className="contact-section">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt className="icon" /> {teacher.address}</p> {/* Use correct property */}
          <p><FaEnvelope className="icon" /> {teacher.email}</p>
          <p><FaPhoneAlt className="icon" /> {teacher.phoneNumber}</p> {/* Use correct property */}
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
