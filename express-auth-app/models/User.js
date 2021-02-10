const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Enter a password'],
    minlength: [6, 'Password should be at least 6 characters in length'],
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
