const express=require("express");
const router=express.Router();
const User=require("../models/user");
const isAuth = require("../middleware/isAuth");

router.post("/cart/add/:productId",isAuth,async(req,res)=>{
    const {productId} =req.params;
    const userId =req.user._id;

    const user= await User.findById(userId);

    let productExists= user.cart.find((item)=>item.productId==productId);

    if(productExists){
        productExists.quantity++;

    }else{
      user.cart.push({ productId });
    }
    user.save();
    req.flash("success","product added to cart")
    res.redirect(req.get("Referrer"));
})

router.get("/user/cart",isAuth,async(req,res)=>{
    const userId=req.user._id;
    const user=await User.findById(userId).populate('cart.productId');
    const userCart=user.cart;
    let totalprice=0;
    for(let cartItem of userCart){
        totalprice+=cartItem.productId.price*cartItem.quantity;
    }
    res.render("cart",{userCart,totalprice});
});
router.get("/cart/minus/:productId",isAuth,async(req,res)=>{
     const {productId}=req.params;
     const userId=req.user._id;

     const user=await User.findById(userId);

     let productExist=user.cart.find((item)=>item.productId==productId);
     if(productExist){
        if(productExist.quantity>1){
        productExist.quantity--;
     }else{
        let ind=user.cart.indexOf(productExist);
        user.cart.splice(ind,1);
     }
     }
     user.save();
     res.redirect(req.get("Referrer"));
})
router.get('/cart/add/:productId',isAuth,async (req,res)=>{
    const {productId} = req.params;
    const userId = req.user?._id;

    const user = await User.findById(userId);

     let isProductExist = user.cart.find((item)=> item.productId==productId);

    if(isProductExist){
        isProductExist.quantity++;
    }else{
        user.cart.push({productId})
     }
     user.save();
     req.flash("success","product added to cart!")
     res.redirect(req.get("Referrer"))
})








module.exports=router;