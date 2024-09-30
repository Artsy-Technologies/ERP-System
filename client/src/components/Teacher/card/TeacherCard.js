import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './TeacherCard.css';

const TeacherCard = ({ name, subject }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <Link to={`/teacher/${name}`} className="card text-center"> {/* Wrap card with Link */}
        <div className="card-body">
          <div className="avatar mx-auto mb-3"></div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{subject}</p>
          <div className="d-flex justify-content-center ">
            <button className="btn rounded-circle">📞</button>
            <button className="btn  rounded-circle">✉️</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TeacherCard;
