import React from 'react';

const BookCard = ({ book, onClick }) => {
  return (
    <div className="dl-book-card" onClick={onClick}>
      <img src={book.image} alt={book.title} />
      <h4>{book.title}</h4>
      <p>{book.author}, {book.year}</p>
      <p>{book.rating} / 5</p>
     
    </div>
  );
};

export default BookCard;
