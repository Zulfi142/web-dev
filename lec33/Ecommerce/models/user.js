const joi = require("joi");
const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");
const userSchema=mongoose.Schema({
    email:{
      type:String,
      require:true,
      trim:true,
    },
    role:{
     type:String,
      require:true,
      trim:true,
    },
    cart:[
      {
       productId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Products'
       },
       quantity:{
                type:Number,
                default:1
            }
    }
  ],
  wishlist: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }
]
})

userSchema.plugin(passportLocalMongoose.default);//ye username password schema khud ba khud bana dega;

const User=mongoose.model("User",userSchema);
module.exports=User;