const express = require("express");
const mongoose = require("mongoose");
const apiRoute = require("./router/apiRoutes.js")


const app = express();



const dbURI = "mongodb+srv://Makinde1034:Makinde1034@firstcluster.3kt4y.mongodb.net/firstData?retryWrites=true&w=majority"

mongoose.connect(dbURI)
.then((res)=>{
  
    app.listen(5000,()=>{
      console.log("listening");
    })
  console.log("connect to mongodb")
}).catch((err)=>{
  console.log(err.message)
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(apiRoute)


app.use((err,req,res,next)=>{
    res.status(422).send({error: err.message});
})

// app.listen(5000,()=>{
//     console.log('Now listening for requests')
// });

