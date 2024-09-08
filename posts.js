const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Define the Post schema
const PostSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets the date and time to the current date and time
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  likes: {
    type: Array,
    default: [], // Default value for likes is 0
  },
});

// Create the Post model

module.exports = mongoose.model('Post', PostSchema);

