const router = require("express").Router();
const Comment = require("../models/Comment")
router

.post("/comment", (req, res) => {
    const { name, comment } = req.body;
    if(!name || !comment)
    return res.send("Please enter all the required credentials!");

    const newComment = new Comment({name, comment})

    newComment
    .save()
    .then(() => {

        console.log("Comment Saved success");
        res.redirect('/');
    })
    .catch((err) => console.log(err));
});

module.exports = router;