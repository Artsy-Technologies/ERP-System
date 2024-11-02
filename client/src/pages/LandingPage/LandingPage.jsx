import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/Images/HomePage/logo.png";
import awards from "../../assets/Images/HomePage/awards.png";
import primary from "../../assets/Images/HomePage/primary.png";
import middle from "../../assets/Images/HomePage/middle.png";
import diploma from "../../assets/Images/HomePage/diploma.png";
import Carousel from "../../components/Homepage/Carousel/carousel.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Intro from "../../components/Homepage/Hero/introBox.jsx";
import Navbar from "../../components/Homepage/Navbar/navbar.jsx";

export default function MainPage() {
  const navigate = useNavigate();
  const [myemail, setmyemail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");

  const contactSubmit = (e) => {
    e.preventDefault();
    if (!myemail || !Message || !Name) {
      alert("Name,email and message are required");
      return;
    }
    // if (!terms.checked){
    //   alert("You must agree to the Terms & Conditions before submitting");
    // }

    axios
      .post("http://localhost:3003/contactDetails", { Name, myemail, Message })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    alert(
      "Your message was succesfully sent !! Our team will contact you soon."
    );
  };

  return (
    <>
      <Navbar />

      {/* Background Image Container */}
      <Intro />
      {/*code for the 2 nd welcome box */}

      <div
        id="about"
        className="container-fluid d-flex flex-column align-items-left justify-content-left "
        style={{ backgroundColor: "#EAF4FD" }}
      >
        <br />

        <h1 className="text-start">
          Welcome to <br /> Vancouver International School
        </h1>
        <br />
        <div className="container-fluid d-flex flex-row">
          <p className="text-start">
            At Vancouver International School, we are committed to nurturing a
            global community of learners. Our school proudly offers a diverse
            and inclusive environment, ensuring that every student feels valued
            and supported. We believe that education goes beyond the classroom,
            and our holistic approach focuses on the academic, emotional, and
            social development of each student
            <br />
            <br />
            Our rigorous and engaging curriculum is designed to challenge and
            inspire students. With dedicated faculty members who are experts in
            their fields, we foster a love of learning and critical thinking.
            Beyond academics, we provide a wide range of extracurricular
            activities, from arts and athletics to clubs and leadership
            opportunities, allowing students to explore their passions and
            develop new skills.
            <br />
            <br />
            We are dedicated to preparing our students to become innovative
            thinkers, compassionate leaders, and responsible global citizens.
            Graduates of Vancouver International School leave with the
            knowledge, skills, and values necessary to succeed in an
            ever-changing world. We invite you to become part of our vibrant
            community and embark on an educational journey that will shape your
            future and empower you to make a positive impact on the world.
            <br />
            <br />
            <Link to="/form">
              <button className="btn btn-secondary w-75">Admission</button>
            </Link>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Hibbing_High_School_2014.jpg"
            className="rounded float-end"
            alt="school image"
            width="50%"
          />
        </div>
        <br />
      </div>

      <br />
      <br />
      <div className="container-fluid d-flex flex-row">
        <h3>Awards and Recognitions</h3>
        <img src={awards} alt="awards" width="80%" />
        <br />
      </div>

      <br />
      <br />
      <div
        className="container-fluid d-flex flex-column"
        id="academics"
        style={{ backgroundColor: "#EAF4FD" }}
      >
        <br />
        <br />
        <h2>
          <pre>
            {" "}
            <u>Academics</u>
          </pre>
        </h2>
        <div className="container-fluid d-flex flex-row justify-content-around">
          <div className="card" style={{ width: "18rem" }}>
            <img src={primary} className="img-fluid" alt="classroom" />
            <div className="card-body">
              <h4>Primary years programme</h4>
              <p className="card-text">
                The Primary section offers the Primary Years Programme (PYP) for
                children aged 3 - 12.  The programme nurtures young students to
                be caring, life long learners who are internationally
                open-minded individuals.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={middle}
              className="img-fluid"
              alt="achievements"
              height="50%"
            />
            <div className="card-body">
              <h4>Middle years programme</h4>
              <p className="card-text">
                The Middle Years Programme  (Grades 6-10) is a concept
                and skill-based curriculum that encourages student inquiry and
                aids in the development of personal understanding and a sense of
                responsibility in their community.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={diploma} className="img-fluid" alt="picture" />
            <div className="card-body">
              <h4>Diploma programme</h4>
              <p className="card-text">
                The Diploma Programme (Grade 11-12) helps students to broaden
                their experience in education, challenging them to then apply
                their education in today’s world.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />

      <div
        className="container-fluid"
        style={{ backgroundColor: "#999393" }}
        id="activities"
      ></div>
      <h2>
        <pre>
          {" "}
          <u>Activities</u>
        </pre>
      </h2>

      <Carousel />

      {/*Contact us*/}
      <div
        id="contact"
        className="container-fluid d-flex flex-row justify-content-around align-items-center"
        style={{ color: "white", backgroundColor: "#56d8b7" }}
      >
        <div className="container flex-column text-left">
          <h2 style={{ textAlign: "left", color: "white" }}>Contact Us</h2>
          <h4 className="registerContact">Register for daily updates</h4>
          <p>
            <i className="bi bi-envelope-check-fill"></i> Hello@relume.io
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> +1 23xXxxXxxx
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> 123 Sample St, Sydney NSW
            2000 AU
          </p>
        </div>
        <div className="container d-flex flex-column">
          <br />
          <br />
          <form action="#" onSubmit={contactSubmit}>
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="Type your name..."
                onChange={(e) => setName(e.target.value)}
              />
              <div id="nameerror" className="text-danger"></div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="myemail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="myemail"
                name="myemail"
                placeholder="name@example.com"
                onChange={(e) => setmyemail(e.target.value)}
              />
              <div id="myemailerror" className="text-danger"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="Message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="Message"
                name="Message"
                rows="3"
                placeholder="Type your message here..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div id="textareaerror" className="text-danger"></div>
            </div>
            <div className="form-check d-flex align-items-center mb-3">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="terms"
                name="terms"
                value="yes"
              />
              I Accept the <Link to="#"> Terms & Conditions</Link>
              <div id="termserror" className="text-danger"></div>
              <div className="invalid-feedback">
                You must agree before submitting
              </div>
            </div>
            <button className="btn btn-light" type="submit">
              Submit
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
      {/*last box*/}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#313131",
          color: "white",
          textDecoration: "none",
        }}
      >
        <br />
        <br />
        <div className="d-flex flex-row justify-content-around ">
          <img src={logo} alt="logo" className="img-fluid" width="40%" />
          <div className="d-flex flex-column">
            <div>
              <b>Courses</b>
            </div>
            <Link to="#">Primary years programme</Link>
            <Link to="#">Middle years programme</Link>
            <Link to="#">Diploma programme</Link>
          </div>
          <div className="d-flex flex-column">
            <div>
              <b>Resources</b>
            </div>
            <Link to="#">Smart classes</Link>
            <Link to="#">Library</Link>
            <Link to="#">Sports</Link>
            <Link to="#">Auditorium & halls</Link>
          </div>
          <div className="d-flex flex-column">
            <div>
              <b>About us</b>
            </div>
            <Link to="#">Contact</Link>
            <Link to="#">Help/Support</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
        </div>
        <br />
        {/* <TeacherList /> */}
        <div
          id="divider-line"
          className="container"
          style={{ backgroundColor: "white", height: "0px", margin: "0" }}
        ></div>
        <br />
        <br />
        <hr
          style={{ borderTop: "4px solid white", width: "100%", margin: "0 " }}
        />
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row" style={{ gap: "20px" }}>
            <p>2024 Vancover.All rights reserved</p>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of service</Link>
            <Link to="#">Cookies settings</Link>
          </div>
          <div className="d-flex flex-row" style={{ gap: "10px" }}>
            <Link to="#">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
