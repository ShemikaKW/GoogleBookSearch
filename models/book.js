// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// set up book schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle:{
        type: String
    },
    authors: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
  image: {
    type: String, 
    required: true 
    },
  googleId: { 
    type: String, 
    required: true, 
    unique: true }
});

// create Book model using schema
const Book = mongoose.model("Book", bookSchema);

// export model
module.exports = Book;