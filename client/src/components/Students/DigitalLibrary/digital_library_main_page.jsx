import React, { useState, useEffect } from "react";
import "./libraryApp.css";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookCard from "./BookCard";
import HistoryBookList from "./Historybooklist";
import BookPopup from "./Openbookpopup";
import DueBookList from "./DueBookList";
import { useNavigate } from "react-router-dom";
import { getRecommendedBooks, getRecentReadings } from "./Api/bookapi";

const DigitalLibraryMainPage = () => {
  const navigate = useNavigate();

  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [recentReadings, setRecentReadings] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [dueBooks, setDueBooks] = useState([]);
  const [view, setView] = useState("main");
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search
  const [likedBooks, setLikedBooks] = useState({});

  const handleToggleLike = (bookId) => {
    setLikedBooks((prev) => ({
      ...prev,
      [bookId]: !prev[bookId], // Toggle the like state
    }));
  };

  useEffect(() => {
    // Use an async function inside the useEffect to fetch the books
    const fetchBooks = async () => {
      const recommended = await getRecommendedBooks();
      const recent = await getRecentReadings();
      
      // Check and update state only when the fetched data is valid arrays
      if (Array.isArray(recommended)) {
        setRecommendedBooks(recommended);
      }
  
      if (Array.isArray(recent)) {
        setRecentReadings(recent);
      }
    };
  
    fetchBooks();
  }, []);

  const handleBookOpen = (book) => {
    setHistoryBooks((prev) => [...prev, { ...book, status: "Reading" }]);

  
    setDueBooks((prev) => [...prev, book]);
    setSelectedBook(book); // Set the selected book to show the popup
  };

  const handleClosePopup = () => {
    setSelectedBook(null); // Close the popup
  };

  const goToLibraryMainPage = () => {
    console.log("Navigating to Digital Library");
    setView("main"); // Ensure this line is here to reset the view state
    navigate("/d_library");
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

 

  const handleUpdateBookStatus = (updatedBook, newStatus) => {
    setHistoryBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.title === updatedBook.title ? { ...book, status: newStatus } : book
      )
    );
  };

  // Filter books based on search term
  const filteredRecommendedBooks = recommendedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecentReadings = recentReadings.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (book, newStatus) => {
    setHistoryBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.title === book.title ? { ...b, status: newStatus } : b
      )
    );
    if (newStatus === "Borrowed") {
      setDueBooks((prevDue) => [...prevDue, book]); // Add to due books list
    } else if (newStatus === "Due") {
      setDueBooks((prevDue) =>
        prevDue.map((b) =>
          b.title === book.title ? { ...b, status: "Due" } : b
        )
      );
    }
  };

  const renderContent = () => {
    if (view === "history") {
      return (
        <HistoryBookList
          books={historyBooks}
          likedBooks={likedBooks} // Pass likedBooks
          onToggleLike={handleToggleLike} // Pass handleToggleLike
          
          dueBooks={dueBooks}
          view={view}
          setView={setView}
        />
      );
    } else if (view === "Due") {
      return (
        <DueBookList
          books={historyBooks}
         
          dueBooks={dueBooks}
          view={view}
          setView={setView}
        />
      );
    } else {
      return (
        <div className="card" style={{ width: "105%", marginTop: "60px" }}>
          <div className="card-body">
            <div className="card-search-bar">
              <input
                type="text"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={handleSearchChange} // Track search input
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
                  className="btn btn-light me-3"
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    boxShadow: "5px 10px 5px -5px #121212",
                  }}
                  onClick={() => setView("history")}
                >
                  History
                </button>
                <button
                  className="btn btn-light"
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    boxShadow: "5px 10px 5px -5px #121212",
                  }}
                  onClick={() => setView("Due")}
                >
                  Due
                </button>
              </div>
            </div>
            <section>
              <p style={{ marginBottom: "10px" }}>Recommended for You</p>
              <div className="book-list">
                {filteredRecommendedBooks.map((book, index) => (
                  <BookCard
                    key={index}
                    book={book}
                    onClick={() => handleBookOpen(book)}
                  />
                ))}
              </div>
            </section>
            <section>
              <p style={{ marginBottom: "10px" }}>Recent Readings</p>
              <div className="book-list">
                {filteredRecentReadings.map((book, index) => (
                  <BookCard
                    key={index}
                    book={book}
                    onClick={() => handleBookOpen(book)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="fullcontainer">
        <div className="library-section">
          <div className="main-page">
            <header>
              <div className="lower_heading_digital_library">
                <div
                  className="digital_library_arrow"
                  onClick={goToLibraryMainPage}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <h1>Digital Library</h1>
                </div>

                <button className="student-portal-button">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ marginRight: "8px" }}
                  />
                  Student Portal
                </button>
              </div>
            </header>
            {renderContent()}
          </div>
        </div>
      </div>
      {selectedBook && (
        <BookPopup
          book={selectedBook}
          onClose={handleClosePopup}
          onUpdateBookStatus={handleUpdateBookStatus}
          onStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};

export default DigitalLibraryMainPage;
