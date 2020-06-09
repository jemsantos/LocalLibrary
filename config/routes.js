const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/', router);

  const itemAuthor = require('../itens/authorService');
  itemAuthor.register(router, '/author');

  const itemBook = require('../itens/bookService');
  itemBook.register(router, '/book');

  const itemBookInstance = require('../itens/bookInstanceService');
  itemBookInstance.register(router, '/book-instance');

  const itemGenre = require('../itens/genreService');
  itemGenre.register(router, '/genre');

}
