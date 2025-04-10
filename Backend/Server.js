const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const DB_conection = require("./DB_conection");


const App = express();
const PORT = process.env.PORT || 5000;


App.use(express.json());
App.use(cors({
  origin:"http://localhost:5173/",
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["Content-Type","Authorization", "Cache-control","Expires","Pragma"],
  credentials:true
}));
App.use(cookieParser());
App.use(express.static("public"));





App.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})


