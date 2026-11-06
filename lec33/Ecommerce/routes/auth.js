const express = require("express");
const router = express.Router();
const User=require("../models/user");
const passport = require("passport");

router.get("/signup",(req,res)=>{
      res.render("auth/signup");
})

router.post("/signup",async(req,res)=>{
try{
    const {username,password,email,role}=req.body;

    let existingUser=await User.findOne({username});
    if(existingUser){
        //user already exist
        req.flash("error","user allready exist")
        res.redirect("/signup");
     res.redirect("/signup");
    }
    else{
    let user=new User({username,email,role});
    await User.register(user,password);
    req.flash("success","user signup successfully!")
    res.redirect("/login")
    }
}catch{
    res.status(500).render("error",{msg:'internal server error'});
}
});
router.get("/login",(req,res)=>{
      res.render("auth/login");
})
router.post('/login',passport.authenticate('local', { failureRedirect: '/login',failureFlash: true }),
  function(req, res) {
    req.flash("success","Login successfully!")
    res.redirect('/');
  });

  router.post("/logout", function(req, res, next) {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash("success","Logout successfully!")
        res.redirect("/");
    });
});
module.exports = router;