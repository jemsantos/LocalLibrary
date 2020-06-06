const Author = require('./author');

//Create REST API, adds CRUD to Mongog's schema
Author.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Author.updateOptions({new: true, runValidators: true});

module.exports = Author;
