const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    book_category:{type: String},
    book_title:{type: String, required:true},
    book_content:{type: String},
    book_img:{type: String}
});

const Book = module.exports = mongoose.model('Book', BooksSchema);