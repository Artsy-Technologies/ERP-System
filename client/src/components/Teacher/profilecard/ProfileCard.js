// ProfileCard.js
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // icons
import "./ProfileCard.css"; // Add your styles here

// ProfileCard component that accepts teacher details as props
const ProfileCard = ({ teacher }) => {
  return (
    <div className=" profile-card ">
      {/* Header */}
      <div className="card-header bg-primary text-white">
        <div className="row align-items-center">
          {/* Image on the left */}
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={teacher.image}
              alt="Profile"
              className="rounded-circle profile-img"
            />
          </div>

          {/* Name and role on the right */}
          <div className="col-md-8">
            <h2 className="name">{teacher.name}</h2>
            <p className="role">{teacher.role}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Details Section */}
        <section className="details-section">
          <h3>Details</h3>
          <div className="row">
            <div className="col-6">
              <p><strong>DOB:</strong> {teacher.dob}</p>
              <p><strong>Class:</strong> {teacher.classSection}</p>
            </div>
            <div className="col-6">
              <p><strong>Subject:</strong> {teacher.subject}</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h3>Education</h3>
          {teacher.education.map((edu, index) => (
            <p key={index}>
              <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
            </p>
          ))}
        </section>

        {/* Expertise Section */}
        <section className="expertise-section">
          <h3>Expertise</h3>
          <p>{teacher.expertise.join(", ")}</p>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt className="icon" /> {teacher.location}</p>
          <p><FaEnvelope className="icon" /> {teacher.email}</p>
          <p><FaPhoneAlt className="icon" /> {teacher.phone}</p>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
