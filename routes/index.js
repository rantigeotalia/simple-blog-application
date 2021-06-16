const router = require("express").Router();
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");


router.get("/", async(req, res) => {
    const allBlogs = await Blog.find();
    const allComment = await Comment.find();
    res.render("index",{ blogs: allBlogs, comments: allComment });
});

module.exports = router;
