const Book = require('./book');

//Create REST API, adds CRUD to Mongog's schema
Book.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Book.updateOptions({new: true, runValidators: true});

module.exports = Book;