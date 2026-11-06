const isSeller=(req,res,next)=>{
    if(req.user && req.user.role=="seller"){
        next();
    }else{
       req.flash("error","Permission Denied");
        res.redirect("/");
    }
}
module.exports=isSeller;