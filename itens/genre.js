const restful = require('node-restful');
const mongoose = restful.mongoose;

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 100, enum: ['Fantasia', 'Ficção', 'Não-ficção', 'Romance', 'História Militar'] }
});

genreSchema
  .virtual('url')
  .get(function () {
  
  return '/catalog/genre/' + this._id;
});

module.exports = restful.model('Genre', genreSchema);