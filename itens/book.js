const restful = require('node-restful');
const mongoose = restful.mongoose;

const Author = require('./Author');
const Genre = require('./Genre');

// os detalhes genéricos do livro

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref : 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: { type: Schema.Types.ObjectId, ref : 'Genre' }

  //categoria
});

bookSchema
  .virtual('url')
  .get(function () {
  
  return '/catalog/book/' + this._id;
});

module.exports = restful.model('Book', bookSchema);