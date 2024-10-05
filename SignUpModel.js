const mongoose = require('mongoose');
const { Schema } = mongoose;

const SignupSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, default: 'User' },
  approved: { type: Boolean, default: false },  
});

const SignUp = mongoose.model('SignUp', SignupSchema);

module.exports = SignUp;
