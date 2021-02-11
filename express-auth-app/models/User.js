const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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

// Fire some function before document saved to database
// eslint-disable-next-line prettier/prettier
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
