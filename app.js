const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog.js")

const app = express();

const dbURI = "mongodb+srv://Makinde1034:Makinde1034@firstcluster.3kt4y.mongodb.net/firstData?retryWrites=true&w=majority"

mongoose.connect(dbURI)
.then((res)=>{
  
    app.listen(4000,()=>{
      console.log("listening");
    })
  console.log("connect to mongodb")
}).catch((err)=>{
  console.log(err.message)
})

// set up cross origin resource sharing 
// var corsOptions = {
//   origin: "http://localhost:8081"
// };


// middleware

// app.use('/',()=>{
//   console.log("we are middleware")
// })

// use cors
// app.use(cors(corsOptions));

// allows  the server to accept post and put  requests in json form 
// app.use(express.json());

// recognizes incoming requests as strings and arrays 
app.use(express.urlencoded({ extended: true }))

// app.get('/',(req,res)=>{
//     res.json({ message: "Welcome to bezkoder application." });
// })

app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title : "About linux",
    snippet: "All you need to know about linux",
    body: "dknkn kndksdnk oad josa noksa"
  })

  blog.save()
    .then((result)=>{
      res.send(result)
    }).catch((err)=>{
      console.log(err)
    })
})

// post request 
 app.post("/post",(req,res) => {
    const blog = new Blog(req.body);
    blog.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err)
       })
 })