import React from "react";
import "./libraryApp.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import Swal from "sweetalert2";
import DueBookCard from "./Duebook";

const BookPopup = ({ book,onUpdateBookStatus,onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fromDate, setFromDate] = useState(null); 
   const [toDate, setToDate] = useState(null);
   const [bookStatus, setBookStatus] = useState(null);
  const [borrowDuration, setBorrowDuration] = useState(7);

  const handleBorrowClick = () => {
    setIsPopupOpen(true);
  };


  const handleClosePopup = () => {
    console.log("borrow done");
    setIsPopupOpen(false);
  };
  const handleConfirmBorrow = () => {
    if (!fromDate || !toDate) {
      alert("Please select both the 'From' and 'To' dates");
      return;
    }
    setBookStatus("Borrowed");
    onUpdateBookStatus(book, "Borrow"); // Notify the parent component
  
    // Set timeout for due status
    setTimeout(() => {
      setBookStatus("Due");
      onUpdateBookStatus(book, "Due");  // Notify the parent component again
    }, borrowDuration * 1000); // This is to simulate the borrow time
    // }, borrowDuration *24*60*60* 1000); // This is to simulate the borrow time
    
    setIsPopupOpen(false);

    <DueBookCard
    book={book}
    borrowDuration = {borrowDuration}/>
  };


  return (
    <div className="dl-popup-overlay">
      <div className="dl-popup-content">
        <div className="dl-popup-header">
          {/* <h2>{book.title}</h2> */}
          <button className="btn btn-secondary" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="dl-popup-body">
          <div className="dl-card-left">
            <div style={{ width: "250px" }}>
              <div className="c-left-left">
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: "150px", height: "200px" }}
                />
                <br />
                <div
                  className="share-btn mt-3 d-flex"
                  style={{ width: "170px" }}
                >
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMessage}
                      style={{ width: "50px" }}
                    />{" "}
                    Review
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ width: "50px" }}
                    />
                    Notes
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      padding: "0px",
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      style={{ width: "40px" }}
                    />
                    share
                  </button>

                  <br />
                </div>
              </div>
              <div className="c-left-bottom mt-5">
                <h3>About Author</h3>
                <br />
                <p style={{ fontSize: "20px" }}>{book.author}</p>
                <p style={{ fontSize: "15px" }}>
                  {book.auth_description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tenetur, consequuntur placeat tempore
                  perferendis veniam ducimus asperiores repudiandae eum rerum
                  nihil?
                </p>
              </div>
            </div>

            <div className="c-left-right">
              <h2>{book.title}</h2>
              <p>
                By {book.author}, {book.year}
                <br />
                Second Edition {book.edition}
              </p>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <p>⭐⭐⭐⭐⭐ 5.0 Ratings</p>
                <p>25 Currently reading</p>
                <p>119 Have read</p>
              </div>
              <button
                className=" dl-open-popup-btn btn btn-secondary ps-5 pe-5 "
                style={{ marginTop: "90px" }}
                onClick={handleBorrowClick}
              >
                Borrow
              </button>
            </div>
          </div>
          <div className="dl-card">
            <div className="dl-card me-5 p-3" style={{fontSize: "13px"}}>
              <p style={{ fontSize: "18px" }}>
                <b>Book Details</b>
              </p>
              <p>
                published in <br />
                United States
              </p>
              <br />
              <p>
                Edition Notes <br />
                series: Dover large orint classics <br /> Genre: Fiction
              </p>
              <br />
              <p>
                Classifications <br />
                Dewey Decimal Class 823/.8 <br />
                Library of Congress PR5485.A12002
              </p>
              <br />
              <p>
                The physical Object <b />
                Pagination ix, 112p.(large print): <br />
                Number of pages 216
              </p>
              <br />
              <p>
                {" "}
                ID Numbers <br />
                My Book Shelf OL3570252M <br />
                ISBN 10 04864224715 <br />
                LCCN 2002073560 <br />
                Library Thing 12349
                <br /> Goodreads 690668
              </p>
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <div className="dl-borrow-popup-container">
            <div className="dl-borrow-popup-content">
              <button
                className="btn btn-secondary "
                style={{ float: "right", width: "50px"}}
                onClick={onClose}
              >
                &times;
              </button>
              <h3 className="mt-5">Fill Up the Details</h3>

              <div>
                <label>From </label>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  selectsStart
                  startDate={fromDate}
                  endDate={toDate}
                  placeholderText="Select From date"
                  dateFormat="dd/MM/yyyy"
                  className="date-picker ms-3"
                />
              </div>

              <div>
                <label>To</label>
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  selectsEnd
                  startDate={fromDate}
                  endDate={toDate}
                  minDate={fromDate} // Ensure 'To' date is after 'From' date
                  placeholderText="Select To date"
                  dateFormat="dd/MM/yyyy"
                  className="date-picker ms-3"
                />
              </div>

              <button
                className="dl-borrow-btn mt-5 mb-3"
                onClick={handleConfirmBorrow}
              >
                Confirm Borrow
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPopup;
