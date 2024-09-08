const mongoose = require('mongoose');
const plm= require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestclone");

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  dp: {
    type: String, // Assuming the dp is stored as a URL to the image
    default: 'defaultDpUrl' // You can replace 'defaultDpUrl' with a real default image URL
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

UserSchema.plugin(plm);
// Create the User model
module.exports = mongoose.model('User', UserSchema);


