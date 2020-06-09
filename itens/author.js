const restful = require('node-restful');
const mongoose = restful.mongoose;

const authorSchema = new mongoose.Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },

  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

authorSchema
  .virtual('name')
  .get(function () {

  var fullname = '';

  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }

  return fullname;
});

authorSchema
  .virtual('lifespan')
  .get(function () {

  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

authorSchema
  .virtual('url')
  .get(function () {

  return '/catalog/author/' + this._id;
});

module.exports = restful.model('Author', authorSchema);