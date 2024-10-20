import Book from "../../libs/models/digitalLibrary/BookModel.js";
import express from 'express';
const router = express.Router();

//@desc   get all books
//@router get /api/books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc  Add a new book
//@routes  post/api/books
const addBook = async (req, res) => {
  const { title, author, year, rating, category, format, penalty_fee, image, description } = req.body;

  const book = new Book({
    title, author, year, rating, category, format, penalty_fee, image, description 
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc get a single book by id
//@route get/api/books/:id
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc  Update a book by ID
//@route put/api/books/:id
const updateBook = async (req, res) => {
  const { title, author, year, rating, category, format, penalty_fee, image, description } = req.body;

  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.year = year || book.year;
    book.rating = rating || book.rating;
    book.category = category || book.category;
    book.format = format || book.format;
    book.penalty_fee = penalty_fee || book.penalty_fee;
    book.image = image || book.image;
    book.description = description || book.description;

    const updateBook = await book.save();
    res.json(updateBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc delete a book by Id
//@route Delete/api/books/:id
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.remove();
    res.json({ message: "Book removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for recommended books
const getRecommendedBooks = async (req, res) => {
  try {
    const recommendedBooks = await Book.find({ isRecommended: true });
    if (!recommendedBooks.length) {
      return res.status(404).json({ message: "No recommended books found" });
    }
    res.status(200).json(recommendedBooks);
  } catch (error) {
    console.error("Error fetching recommended books:", error);
    res.status(500).json({ message: error.message });
  }
};

// Controller for recent readings
const getRecentReadings = async (req, res) => {
  try {
    const recentBooks = await Book.find({ isRecent: true });
    if (!recentBooks.length) {
      return res.status(404).json({ message: "No recent books found" });
    }
    res.status(200).json(recentBooks);
  } catch (error) {
    console.error("Error fetching recent books:", error);
    res.status(500).json({ message: error.message });
  }
};

export default {addBook, getBooks, getBookById, deleteBook, getRecentReadings, getRecommendedBooks, updateBook};
