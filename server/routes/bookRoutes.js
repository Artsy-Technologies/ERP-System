const express = require("express");
const {
  getBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
  getRecentReadings,
  getRecommendedBooks,
} = require("../controllers/BookControllers");

const router = express.Router();

router.get("/recommended", getRecommendedBooks);  
router.get("/recent", getRecentReadings); 

// Main book routes
router.route("/").get(getBooks).post(addBook);   
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
