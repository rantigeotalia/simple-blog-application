const mongoose = require("mongoose")
const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
    postedAt:{
        type: String,
        default: new Date().toString() ,
    }
})

module.exports = new mongoose.model("Comment", CommentSchema);