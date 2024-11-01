import React, { useState } from "react";
import "./libraryApp.css";

const DueBookCard = ({ book, onClose, borrowDuration }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  // const [borrowDuration, setBorrowDuration] = useState();

  const handleBorrowClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="dl-due-card-body">
      <div className="history-book-card">
        <img src={book.image} alt={book.title} className="dl-book-image" />
        <div style={{width: "120px"}}>
          <h6>{book.title}</h6>
          <p style={{ fontSize: "12px" }}>
            {book.author}, <p style={{ fontSize: "10px" }}> {book.year}</p>
          </p>
        </div>
        <p  className= "text-center" style={{ fontSize: "20px" }}>{borrowDuration} days</p>

        {book.format ? (
          <p className= "text-center" style={{width: "140px", fontSize: "20px", }}>
            {" "}
            <span className={`status ${book.format.toLowerCase()}`}>
              {book.format}
            </span>
          </p>
        ) : (
          <p>
            <span className="status unknown">Unknown</span>
          </p>
        )}
        
        {book.penalty_fee ? (
          <p className= "text-center" style={{ width: "140px" }}>
            {" "}
            <span className={`status ${book.penalty_fee.toLowerCase()}`}>
              {book.penalty_fee}
            </span>
          </p>
        ) : (
          <p>
            <span className="status unknown">Unknown</span>
          </p>
        )}
        {/* </div> */}
        <button className="btn btn-secondary" onClick={handleBorrowClick} style={{width:"100px"}}>
          Pay Now
        </button>

        {console.log("first")}
      </div>
      {isPopupOpen && (
        <div className="dl-modal-overlay">
          <div className="dl-modal-container">
            <button
              className="btn btn-secondary "
              style={{ float: "right", width:"50px" }}
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="mt-3">PAYMENT</h2>
            <div className="dl-payment-form">
              <div className="dl-form-group">
                <label>CREDIT CARD NUMBER</label>
                <input type="text" placeholder="XXXX XXXX XXXX 8014"  />
              </div>

              <div className="dl-form-group">
                <label>CARD HOLDER NAME</label>
                <input type="text" placeholder="REINHARD KENSON" />
              </div>

              <div className="dl-form-row">
                <div className="dl-form-group">
                  <label>EXPIRY</label>
                  <input type="text" placeholder="08/21" />
                </div>

                <div className="dl-form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="XXX"  />
                </div>
              </div>

              <div className="total-amount text-start">TOTAL:  {(borrowDuration)* (book.penalty_fee)}</div>

              <div className="dl-save-card mt-3">
                <input
                  type="checkbox"
                  id="save-card"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />

                <button
                  className="dl-borrow-btn "
                  onClick={handleClosePopup}
                  style={{ width: "500px" }}
                >
                  PROCEED TO PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DueBookCard;
