import { useState } from "react";
import logo from "../../../assets/Images/HomePage/logo.png";
import "./navbarStyle.css";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accountType, setaccountType] = useState("Student");

  const validateForm = () => {
    let valid = true;
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    document.getElementById("emailerror").innerText = "";
    document.getElementById("passerror").innerText = "";
    emailInput.classList.remove("error", "success");
    passwordInput.classList.remove("error", "success");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      document.getElementById("emailerror").innerText =
        "Please enter a valid email address.";
      emailInput.classList.add("error");
      valid = false;
    } else {
      emailInput.classList.add("success");
    }

    if (passwordInput.value.length < 6) {
      document.getElementById("passerror").innerText =
        "Password must be at least 6 characters long.";
      passwordInput.classList.add("error");
      valid = false;
    } else {
      passwordInput.classList.add("success");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("/login", {
          email,
          password,
          accountType,
        });
        const { message, redirectTo } = response.data;

        if (message === "Success") {
          navigate(redirectTo);
        } else {
          alert(message);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
       <ScrollLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" width="350px" />
        </ScrollLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex me-auto" id="childdiv">
              <Link className="nav-link" to="/home">Home</Link>
              <ScrollLink className="nav-link" to="academics">Academics</ScrollLink>
              <ScrollLink className="nav-link" to="about">About Us</ScrollLink>
              <ScrollLink className="nav-link" to="activities">Activities</ScrollLink>
              <ScrollLink className="nav-link" to="contact">Contact</ScrollLink>
            </div>
            <div className="d-flex gap-3">
              <ScrollLink to="/signup">
                <button className="btn btn-light" style={{ whiteSpace: 'nowrap' }}>Sign up</button>
              </ScrollLink>
              <button
                className="btn btn-light"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myform" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="@gmail.com"
                  onChange={(e) => setemail(e.target.value)}
                />
                <div id="emailerror" className="text-danger"></div>
                <br />
                <label className="form-label" htmlFor="accountType">Type of account</label>
                <select
                  name="accountType"
                  value={accountType}
                  onChange={(e) => setaccountType(e.target.value)}
                  className="form-select"
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                </select>
                <br />
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div id="passerror" className="text-danger"></div>
                <ScrollLink className="d-flex float-end" href="#">Forgot password</ScrollLink>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" form="myform">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
