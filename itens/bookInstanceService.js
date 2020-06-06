const BookInstance = require('./bookInstance');

//Create REST API, adds CRUD to Mongog's schema
BookInstance.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
BookInstance.updateOptions({new: true, runValidators: true});

module.exports = BookInstance;