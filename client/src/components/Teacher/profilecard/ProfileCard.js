import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // icons
import "./ProfileCard.css";

// ProfileCard component that accepts teacher details as props
const ProfileCard = ({ teacher }) => {
  return (
    <div className="card profile-card mx-auto">
      {/* Header */}
      <div className="card-header bg-primary text-white">
  <div className="row align-items-center">
    {/* Image on the left */}
    <div className="col-md-4 text-center">
      <img
        src={teacher.image}
        alt="Profile"
        className="rounded-circle profile-img"
      />
    </div>

    {/* Name and role on the right */}
    <div className="col-md-8 text-left">
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
          <div className="col ">
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
          <ul className="list-unstyled">
            {teacher.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
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

// Main component to render multiple ProfileCards
const ProfileList = () => {
  const teachers = [
    {
      name: "Samantha S",
      role: "Teacher",
      dob: "14/04/1981",
      classSection: "12 D",
      subject: "History",
      expertise: ["World History", "Philosophy", "Prehistoric", "Culture", "Ancient"],
      education: [
        { degree: "History Major", institution: "University Akademi Historia", year: "2001-2004" },
        { degree: "Master of History", institution: "University Akademi Historia", year: "2005-2009" },
      ],
      location: "Kerala, India",
      email: "samantha@mail.com",
      phone: "+12 345 6789 0",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {teachers.map((teacher, index) => (
          <div key={index} className="col-md-6 mb-4">
            <ProfileCard teacher={teacher} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
