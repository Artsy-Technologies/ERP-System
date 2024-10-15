import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';  
import './TeacherCard.css';

const TeacherCard = ({ id, name, subject, image }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <Link to={`/teacher/${id}`} className="card text-center"> {/* Use id instead of name */}
        <div className="card-body">
          <img src={image} alt={name} className="teacher-img mx-auto mb-3" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{subject}</p>
          <div className="d-flex justify-content-center contact-icons">
            <button className="btn contact-btn rounded-circle">
              <FiPhone /> {/* Render phone icon */}
            </button>
            <button className="btn contact-btn rounded-circle">
              <FiMail /> {/* Render email icon */}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TeacherCard;
