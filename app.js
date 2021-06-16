const express = require("express")
const mongoose = require("mongoose")

const app = express()

//! connect to mongodb

mongoose.connect("mongodb://rantigeotalia:Rosita12@cluster0-shard-00-00.0r0jq.mongodb.net:27017,cluster0-shard-00-01.0r0jq.mongodb.net:27017,cluster0-shard-00-02.0r0jq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-561inm-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    },
    () => {
        console.log("Connection to mongodb database was successful");
})

//middlewares

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

//route
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))
app.use(require("./routes/comment"))


// server configuration
app.listen(3000, () => console.log("Server started listening on port : 3000"))