const express = require("express");
const app = express();
const port = 8000;

app.get("/",(req,res) =>{
    return res.send("Home page");
});

app.get("/login",(req,res) =>{
    return res.send("Login page");  x   
});

const admin = (req,res) =>{
    return res.send("admin dashboard");
}
const isAdmin =(req,res,next) =>{
    console.log("isAdmin is running");
    next();
}
app.get("/admin",isAdmin,admin);
 
app.get("/signup", (req,res) =>{
    return res.send("signup page");
});

app.listen(port,()=>{
    console.log("Server is running...");
});