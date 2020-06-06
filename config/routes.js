const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/', router);

  const authorService = require('../itens/authorService');
  authorService.register(router, '/author');

  const bookService = require('../itens/bookService');
  bookService.register(router, '/book');

  const bookInstanceService = require('../itens/bookInstanceService');
  bookInstanceService.register(router, '/bookInstance');

  const genreService = require('../itens/genreService');
  genreService.register(router, '/genre');
}
