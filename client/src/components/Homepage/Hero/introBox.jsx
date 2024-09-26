import "./introStyle.css";
import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="container-fluid bg-container d-flex flex-column align-items-start justify-content-start">
      <div className="overlay">
        <div className="spacing"></div>
        <div className="text-white">
          <h1>Join us</h1>
          <h1>where learning meets excellence</h1>
          <p>One of the most prominent educational institutions of the world</p>
        </div>
        <br />
        <Link
          to="/form"
          className="btn btn-danger"
          role="button"
          aria-disabled="true"
        >
          Admissions
        </Link>
      </div>
    </div>
  );
}
export default Intro;
