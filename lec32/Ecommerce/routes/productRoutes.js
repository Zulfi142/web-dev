const express = require('express');
const router = express.Router();
const {A,B} = require("../controllers/product");
const Products = require("../models/Products");
const isAuth = require('../middleware/isAuth');
const isSeller = require('../middleware/isSeller');
const { validateProducts } = require('../middleware/validation');

router.get('/',A)

router.get('/product/new',isAuth,isSeller,B)

router.post('/products',isAuth,isSeller,validateProducts,(req,res)=>{
    const {name,image,price,desc} = req.body;
    
    Products.create({name,image,price,desc});

   req.flash("success","Product created successdully!");
   res.redirect('/')
})

router.get('/products/:productId/edit',isAuth,isSeller,async (req,res)=>{
    const {productId} = req.params;
    // const product = await Products.findOne({_id:productId})
    const product = await Products.findById(productId)
    res.render('edit',{product})
})

router.put('/products/:productId',isAuth,isSeller,validateProducts ,async (req,res)=>{
    const {productId} = req.params;
    const {name,image,price,desc} = req.body;
    await Products.findByIdAndUpdate(productId,{name,image,price,desc});
    req.flash("success","Product updated successdully!")
    res.redirect('/')
})

router.delete('/products/:productId',isAuth,isSeller,async (req,res)=>{
    const {productId} = req.params;
    await Products.findByIdAndDelete(productId);
    req.flash("success","Product Deleted successdully!")
    res.redirect('/')
})

router.get('/products/:productId',isAuth, async (req, res) => {

    const { productId } = req.params;

    let product = await Products
        .findById(productId)
        .populate('reviews');

    let avgRating = 0;

    if (product.reviews.length > 0) {

        let total = 0;

        for (let review of product.reviews) {
            total += review.rating;
        }

        avgRating = total / product.reviews.length;
    }

    res.render('show', {
        product,
        avgRating
    });
});

module.exports = router;