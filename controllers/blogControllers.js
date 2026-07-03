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
    // filtering
    const { author, tag, sort } = req.query;
    let filter = {};
    if(author){
      filter.author = author;
    }
    if(tag){
      filter.tags = tag;
    }

    // Sorting
    let sortOption = {};
    if(sort === "newest"){
      sortOption = { createdAt: -1 };
    } else if(sort === "oldest"){
      sortOption = { createdAt: 1 };
    }

    // pagination
    const page = parseInt(req.query.page) || 1;
    const Limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * Limit;

    const blogs = await blog.find(filter).sort(sortOption).skip(skip).limit(Limit);

    res.status(200).json(blogs);
  } 
  catch(err){
    res.status(500).json({ message: err.message })
  }
}

const getBlogById = async(req, res) => {
  try{
    const blogs = await blog.findById(req.params.id);
    if(!blogs){
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(201).json(blogs);
  } catch(err){
    res.status(500).json({ message: err.message })
  }
}

const updateBlog = async(req, res) => {
  try{
    const blogs = await blog.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
    
    if(!blogs){
      return res.status(400).json({ message: "Blog not found" });
    }
    res.status(201).json({ message: "Blog Updated successfully"}, blogs);
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
}

const deleteBlog = async(req, res) => {
  try{
    const blogs = await blog.findByIdAndDelete(req.params.id);

    if(!blogs){
      return res.status(400).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully"}, blogs)
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
}

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };