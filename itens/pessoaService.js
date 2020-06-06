const Pessoa = require('./pessoa');

//Create REST API, adds CRUD to Mongog's schema
Pessoa.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Pessoa.updateOptions({new: true, runValidators: true});

module.exports = Pessoa;