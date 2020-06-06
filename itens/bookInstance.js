const restful = require('node-restful');
const mongoose = restful.mongoose;

const Book = require('./book');

// status de cópias físicas específicas do livro disponíveis no sistema

const bookInstanceSchema = new mongoose.Schema({
  book: { type: Schema.Types.ObjectId, ref : 'Book', required: true },
  imprint: { type: String, required: true },
  status: { type: String, require: true, enum: ['Disponível', 'Manutenção', 'Emprestado', 'Reservado'], default: 'Manutenção' },
  due_back: { type: Date, default: Date.now }
});

bookInstanceSchema
  .virtual('url')
  .get(function () {
  
  return '/catalog/bookinstance/' + this._id;
});

module.exports = restful.model('BookInstance', bookInstanceSchema);