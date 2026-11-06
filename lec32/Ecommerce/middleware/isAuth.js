const isAuth=(req,res,next)=>{
       if(req.user){
        next();
       }else{
        req.flash("error","Please Login First");
        res.redirect("/login");
       }
}
module.exports=isAuth;