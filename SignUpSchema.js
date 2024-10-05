const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  Username: String,
  Password: String,
  Email: { type: String, unique: true },
  Phone: String,
  Role: String,
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;