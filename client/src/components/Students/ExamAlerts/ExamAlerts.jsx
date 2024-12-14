import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExamAlerts() {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className="d-flex vh-100">
      <main className="flex-grow-1 bg-light p-4">
        <div className="d-flex justify-content-start align-items-center bg-white p-3 rounded mb-4">
          <div className="d-flex">
            <button
              className="btn btn-link p-0"
              onClick={() => window.history.back()}
              style={{ minWidth: "50px" }}
            >
              &larr;
            </button>
          </div>

          <h1 className="h3  flex-grow-1 mb-0">EXAM ALERTS</h1>

          <div className="d-flex">
            <button
              className="btn btn-outline-secondary"
              style={{ minWidth: "100px" }}
            >
              Student Portal
            </button>
          </div>
        </div>

        {/* First row of alerts */}
        <div className="row g-4 align-items-start">
          <div className="col-md-6">
            <h2 className="h5 mb-3">TESTS</h2>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Chemistry test on 24th May 24</p>
              <small>Topics: till organic bonds</small>
            </div>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Biology test on 21st June 24</p>
              <small>Topics: till animal kingdom species</small>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="h5 mb-3 invisible">Placeholder</h2>{" "}
            {/* Keeps header alignment consistent */}
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Physics practical test on 1st June 24</p>
              <small>Topics: Wheatstone bridge, mirrors</small>
            </div>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Math test on 31st June 23</p>
              <small>Topics: calculus and differentiation</small>
            </div>
          </div>
        </div>

        {/* Second row of alerts */}
        <div className="row g-4 align-items-start mt-4">
          <div className="col-md-6">
            <h2 className="h5 mb-3">EXAMS</h2>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Model Exam: Chemistry on 3rd September 24</p>
              <small>Till mid-term portions</small>
            </div>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Model Exam: Physics on 9th September 24</p>
              <small>Till mid-term portions</small>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="h5 mb-3 invisible">Placeholder</h2>{" "}
            {/* Keeps header alignment consistent */}
            <div className="alert alert-secondary p-3">
              <p className="mb-1">Mid Sem exam starts on 2nd November 24</p>
              <small>Till mid-term portions</small>
            </div>
            <div className="alert alert-secondary p-3">
              <p className="mb-1">End Sem exam on 3rd March 25</p>
              <small>Complete portions</small>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExamAlerts;

