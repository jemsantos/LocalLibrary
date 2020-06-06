const Genre = require('./genre');

//Create REST API, adds CRUD to Mongog's schema
Genre.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Genre.updateOptions({new: true, runValidators: true});

module.exports = Genre;