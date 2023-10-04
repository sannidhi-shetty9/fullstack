const mongoose = require('mongoose');

// mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// mongoose model /object
const User = mongoose.model('User', userSchema);

module.exports = User;

