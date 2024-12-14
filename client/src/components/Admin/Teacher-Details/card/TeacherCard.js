import React from "react";
import { Link } from "react-router-dom";
import "./TeacherCard.css";

const TeacherCard = ({ id, name, subject, image }) => {
  return (
    <div className="teacher-card-col col-lg-2 col-md-4 col-sm-6 mb-4">
      <div className="teacher-card-body">
        <img src={image} alt={name} className="teacher-card-img mx-auto mb-3" />
        <Link
          to={`/admin-dashboard/teacher/${id}`}
          className="teacher-card-link"
        >
          <h5 className="teacher-card-title">{name}</h5>
        </Link>
        <p className="teacher-card-text text-muted">{subject}</p>
        <div className="teacher-card-contact-icons">
          <button className="teacher-card-contact-btn rounded-circle">
            📞
          </button>
          <button className="teacher-card-contact-btn rounded-circle">
            ✉️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
