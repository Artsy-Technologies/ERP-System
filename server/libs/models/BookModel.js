const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number, 
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,  
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  penalty_fee: {
    type: String,
    required: true,
  },
  isRecommended: {  
    type: Boolean,
    default: false  // This ensures that by default, books are not recommended
  },
  isRecent: {        // Add this field only once
    type: Boolean,
    default: false  // This ensures that by default, books are not marked as recent
  }
});

module.exports = mongoose.model('books', BookSchema);
