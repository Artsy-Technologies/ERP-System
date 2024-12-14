import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ProfileCard.css";

const ProfileCard = ({ teacher }) => {
  if (!teacher) {
    return <div>No teacher data available.</div>;
  }

  const expertise = teacher.subject ? [teacher.subject] : ["N/A"];
  const education = [
    {
      degree: teacher.ugCourse || "N/A",
      institution: teacher.ugUniversity || "N/A",
      year: teacher.ugYear || "N/A",
    },
    {
      degree: teacher.pgCourse || "N/A",
      institution: teacher.pgUniversity || "N/A",
      year: teacher.pgYear || "N/A",
    },
  ];

  const teacherImage = teacher.photo
    ? `http://localhost:8000/uploads/${teacher.photo}`
    : "http://via.placeholder.com/150";

  return (
    <div className="teacher-profile-card">
      <div className="teacher-card-header bg-primary text-white">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={teacherImage}
              alt={`${teacher.fullName}'s profile`}
              className="rounded-circle teacher-profile-img"
            />
          </div>
          <div className="col-md-8">
            <h2 className="teacher-name">{teacher.fullName || "N/A"}</h2>
            <p className="teacher-role">{teacher.subject || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="teacher-card-body">
        <section className="teacher-details-section">
          <h3 className="teacher-section-title">Details</h3>
          <div className="row">
            <div className="col-6">
              <p>
                <strong>DOB:</strong>{" "}
                {teacher.dob ? teacher.dob.split("T")[0] : "N/A"}
              </p>
              <p>
                <strong>Class:</strong> {teacher.classAllotted || "N/A"}
              </p>
            </div>
            <div className="col-6">
              <p>
                <strong>Subject:</strong> {teacher.subject || "N/A"}
              </p>
            </div>
          </div>
        </section>

        <section className="teacher-education-section">
          <h3 className="teacher-section-title">Education</h3>
          {education.map((edu, index) => (
            <p key={index}>
              <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
            </p>
          ))}
        </section>

        <section className="teacher-expertise-section">
          <h3 className="teacher-section-title">Expertise</h3>
          <p>{expertise.join(", ")}</p>
        </section>

        <section className="teacher-contact-section">
          <h3 className="teacher-section-title">Contact</h3>
          <p>
            <FaMapMarkerAlt className="teacher-contact-icon" />{" "}
            {teacher.address || "N/A"}
          </p>
          <p>
            <FaEnvelope className="teacher-contact-icon" />{" "}
            {teacher.email || "N/A"}
          </p>
          <p>
            <FaPhoneAlt className="teacher-contact-icon" />{" "}
            {teacher.phoneNumber || "N/A"}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
