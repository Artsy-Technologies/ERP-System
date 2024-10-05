import React, { useState } from "react";
import "./libraryApp.css";
import HistoryBookCard from "./Historybookcard";
import DueBookList from "./DueBookList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HistoryBookList = ({ books, likedBooks, onToggleLike, dueBooks, view, setView }) => {
  const [searchTerm, setSearchTerm] = useState(""); 


  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    if (view === "Due") {
      return <DueBookList books={dueBooks} likedBooks={likedBooks} onToggleLike={onToggleLike}/>;
    } else {
      return (
        <div className="history-book-list">
         
            <div className="d-flex" style={{justifyContent: "space-between"}}>
              <p style={{ width: "290px" }}>Title</p>
              <p>Ratings</p>
              <p>Category</p>
              <p style={{ width: "140px" }}>Status</p>
              <p></p>
            </div>
            
           {filteredBooks.map((book) => (
            <HistoryBookCard
              key={book._id}
              book={book}
              liked={likedBooks[book._id] || false} // Pass the liked state of each book
              onToggleLike={() => onToggleLike(book._id)} // Handle like toggle for each book
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="card" style={{ width: "100%", marginTop: "60px" }}>
      <div className="card-body">
        <div className="card-search-bar">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm} // Bind the input to the state
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
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
                boxShadow: "5px 10px 5px -5px #121212",
              }}
              onClick={() => setView("Due")}
            >
              <FontAwesomeIcon icon={faArrowRight} /> Due
            </button>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default HistoryBookList;
