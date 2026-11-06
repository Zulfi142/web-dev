const express=require("express");
const app=express();
const User=require("./models/users");
const bcrypt=require("bcrypt");
const session = require('express-session')
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/cbndAuth")
.then(()=>{
    console.log("db connected")
})
.catch(()=>{
    console.log("db not connected")
})
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:1*60*1000,
  }
}));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.post("/signup",async(req,res)=>{
    const{username,password,email}=req.body;
    let user=await User.findOne({username});
    if(user){
       res.send("user already exists");
    }else{
    //    User.create({username,password,email});
       let saltRound=10;
       const hashPassword=await bcrypt.hash(password,saltRound); 
       await User.create({username,password:hashPassword,email});
       return res.redirect("/login");
    }
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",async(req,res)=>{
    const{username,password}=req.body;
    let user=await User.findOne({username});
    if(!user){
        res.send("username not exist");
    }else{
      let bool=await bcrypt.compare(password,user.password);
      if(bool){
        //password verify
        req.session.user=user;
        res.redirect("/");
      }
      else{
        res.send("password is incorrect");
      }
    }
})
let IsAuth=(req,res,next)=>{//middleware function;
    if(req.session.user){
        next();
    }
    else{
      res.redirect("/login")
    }   
}
app.get("/payment",IsAuth,(req,res)=>{//protected routes
    res.render("payment");
})








app.listen(4000,()=>{
    console.log("running")
});