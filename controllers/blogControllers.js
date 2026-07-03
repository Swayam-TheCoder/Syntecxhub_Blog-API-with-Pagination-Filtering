const blog = require('../models/blog');

const createBlog = async(req, res) => {
  try{
    const {title, content, author, tags} = req.body;

    if(!title || !content || !author){
      return res.status(400).json({ message: "Please fill all the required fields"})
    }

    const blogs = await blog.create({
      title, content, author, tags
    })

    res.status(201).json({ message: "Blog created successfully"}, blogs);
  }
  catch(err){
    res.status(500).json({ message: err.message })
  }
}

const getBlogs = async(req, res) => {
  try{
    const blogs = await blog.find(); 

    res.status(200).json(blogs);
  } 
  catch(err){
    res.status(500).json({ message: err.message })
  }
}

module.exports = { createBlog, getBlogs };