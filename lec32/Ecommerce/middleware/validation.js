const {productSchema,reviewSchema}=require("../SchemaValidators/ProductValidation");

const validateProducts=async(req,res,next)=>{
      try{
        const val=await productSchema.validateAsync(req.body);
        next();
      }
      catch(err){
         req.flash("error",{msg:err.details[0].message})
          res.redirect(req.get("Referrer") || "/")
      }
}
const validateReview=async(req,res,next)=>{
    try{
      const val=await reviewSchema.validateAsync(req.body);
      next();
      }
      catch(err){
        req.flash("error",{msg:err.details[0].message})
          res.redirect(req.get("Referrer") || "/")
      }
}
module.exports={validateProducts,validateReview};