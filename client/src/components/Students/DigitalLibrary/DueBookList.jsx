import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DueBookCard from "./Duebook";
import "./libraryApp.css";
import { useEffect } from "react";
import {
  faArrowLeft,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HistoryBookList from "./Historybooklist";

const DueBookList = ({ books, dueBooks, view, setView }) => {
  const [searchTerm, setSearchTerm] = useState("");

 

  const filteredBooks = books.filter(
    (book) =>
      book.status === "Due" &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  
  const renderContent = () => {
    if (view === "history") {
      return <HistoryBookList books={dueBooks} />;
    } else {
      return (
        <div className="dl-history-book-list">
          <div className="d-flex" style={{ fontSize: "20px" }}>
            <p className = "text-start" style={{ width: "100px" }}>Title</p>
            <p  className= "text-start" style={{ fontSize: "20px" }}>Due days</p>
            <p
              style={{
                width: "140px",
                fontSize: "20px",
                textAlign: "center",
                marginLeft: "20px",
              }}
            >
              Book Format
            </p>
            <p style={{ width: "140px", fontSize: "20px", textAlign:"center" }}>Penality Fee</p>
            <p></p>
          </div>

          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <DueBookCard key={index} book={book} />
            ))
          ) : (
            <p>No Due books found</p>
          )}
        </div>
      );
    }
  };

  return (
    <div className="dl-card" style={{ width: "100%", marginTop: "60px" }}>
      <div className="dl-card-body">
        <div className="dl-card-search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "30px",
              width: "350px",
              float: "left",
              paddingLeft: "30px",
            }}
          />
          <div>
            <button
              className="btn btn-light"
              style={{
                borderRadius: "50px",
                width: "100px",
                boxShadow: "5px 5px 5px -5px #121212",
              }}
              onClick={() => setView("history")}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> History
            </button>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default DueBookList;
