  const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/E-commerce").then(()=>{
    console.log("DB connected");
  }).catch((err)=>{
    console.log(err);
    
  })