import React from "react";
import { useParams } from "react-router-dom";
import ProfileCard from './ProfileCard.js'; // Adjust path if necessary
import "./ProfileCard.css";

const ProfileList = () => {
  const { name } = useParams(); // Get the name from the URL parameter
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
    },
    // Add other teacher profiles here
  ];

  // Find the teacher by name
  const teacher = teachers.find(t => t.name === name);

  return (
    <div className="container">
      <div className="row">
        {teacher ? (
          <div className="col-md-6 mb-4">
            <ProfileCard teacher={teacher} />
          </div>
        ) : (
          <div>Teacher not found.</div>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
