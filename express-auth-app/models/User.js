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

  // Save hashed pw to the database
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Static method to the User
// eslint-disable-next-line prettier/prettier
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      return user;
    }
    throw Error('Incorrect password');
  }

  throw Error('Incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
