import React, { useState } from "react";
import "./libraryApp.css";

const HistoryBookCard = ({  book, liked, onToggleLike }) => {

  return (
    <div className="dl-card-body">
      <div className="history-book-card">
        <img src={book.image} alt={book.title} className="dl-book-image" />
        {/* <div className="book-details"> */}
        <div style={{ width: "180px" }}>
          <h6>{book.title}</h6>
          <p style={{ fontSize: "12px" }}>
            {book.author}, 
            <p style={{ fontSize: "10px" }}> {book.year}</p>
          </p>
        </div>
        <p> {book.rating}/5</p>
        {/* <p>{book.category}</p> */}

        {book.category ? (
          <p>
            <span className={`status ${book.category.toLowerCase()}`}>
              {book.category}
            </span>
          </p>
        ) : (
          <p>
            <span className="status unknown">Unknown</span>
          </p>
        )}

        {/* Show the status if it exists */}
        <p
          className="ps-2 pe-2"
          style={{
            fontSize: "12px",
            color: "black",
            width: "80px",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor:
              book.status === "Reading"
                ? "lightgreen"
                : book.status === "Due"
                ? "lightred"
                : book.status === "Borrow"
                ? "yellow"
                : "",
          }}
        >
          <span
            className={`status ${
              book.status ? book.status.toLowerCase() : "unknown"
            }`}
          >
            {book.status || "Unknown"}
          </span>
        </p>

        {/* </div> */}
        <button className="dl-like-button" onClick={onToggleLike}>
          {liked ? "❤️" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default HistoryBookCard;
