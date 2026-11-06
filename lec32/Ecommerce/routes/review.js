const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Products = require("../models/Products");
const { validateReview } = require("../middleware/validation");
const isSeller = require("../middleware/isSeller");
const isAuth = require("../middleware/isAuth");

router.post("/products/:productId/reviews",isAuth,validateReview,async (req,res)=>{
    // console.log(req.body);
    const {productId} = req.params;
    let product = await Products.findById(productId)

    const {rating,comment} = req.body;
    let x = await Review.create({rating,comment})

    product.reviews.push(x);
    product.save();
    

    // res.redirect('back');  in express 4 version
    // res.redirect(`/products/${productId}`)
    req.flash("success","Review Added Successdully!")
    res.redirect(req.get("Referrer") || "/");
})


module.exports = router;