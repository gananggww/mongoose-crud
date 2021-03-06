const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
  isbn:  String,
  title: String,
  author:   String,
  category: String,
  stock: Number,
});

const modelBook = mongoose.model('books', bookSchema);

module.exports = modelBook
