const express = require("express");
const apiRoute = express.Router();
const Blog = require("../models/blog.js");

apiRoute.get("/api",(req,res)=>{
    res.send("hello bryan");
})


// get request
apiRoute.get("/api/students",(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result);
    })
});

apiRoute.get("/api/students/:id",(req,res)=>{
    Blog.findById(req.params.id)
        .then((result)=>{
            res.send(result)
        }).catch((err)=>{
            res.send(err.message)
        })

})

// post request
apiRoute.post("/api/students",(req,res)=>{
    Blog.create(req.body).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err.message)
        console.log(err.message);
    })
})

// delete request
apiRoute.delete("/api/students/:id",(req,res)=>{
    Blog.findOneAndDelete({_id : req.params.id})
        .then((result)=>{
            res.send(result)
        }).catch((err)=>{
            console.log(err.message);
        })
})

apiRoute.put("/api/students/:id",(req,res)=>{
    Blog.findOneAndUpdate({_id:req.params.id},req.body)
        .then((result)=>{
            Blog.findOne({_id:req.params.id})
                .then((result)=>{
                    res.send(result)
                })
        })
})

module.exports = apiRoute