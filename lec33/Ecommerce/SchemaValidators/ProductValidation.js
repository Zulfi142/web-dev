const joi=require("joi");

const productSchema=joi.object({
    name:joi.string().required(),
    image:joi.string().required(),
    price:joi.number().required().min(0),
    desc:joi.string(),
})
const reviewSchema=joi.object({
    rating:joi.number().required().min(0).max(5),
    comment:joi.string()
})
module.exports={productSchema,reviewSchema};