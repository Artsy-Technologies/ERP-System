// ProfileList.js
import React from "react";
import ProfileCard from "./ProfileCard"; // Import the ProfileCard component
import "./ProfileCard.css"; // Add your styles here

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
    },
    // Add more teachers if needed
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
