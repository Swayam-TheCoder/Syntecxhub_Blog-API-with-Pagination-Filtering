const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  
  content: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true,
    trim: true
  },

  tags: [ 
  {
    type: String,
    trim: true
  },
],
},{
  timestamps: true
})

module.exports = mongoose.model("Blog", blogSchema);