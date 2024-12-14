import express from 'express';
import BookControllers from "../../controllers/digitalLibraryController/BookControllers.js";

const { getBooks, addBook, getBookById, updateBook, deleteBook, getRecentReadings, getRecommendedBooks } = BookControllers;


const router = express.Router();

router.get("/recommended", getRecommendedBooks);  
router.get("/recent", getRecentReadings); 

// Main book routes
router.route("/").get(getBooks).post(addBook);   
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

export default router;
