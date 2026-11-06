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
})

userSchema.plugin(passportLocalMongoose.default);//ye username password schema khud ba khud bana dega;

const User=mongoose.model("User",userSchema);
module.exports=User;