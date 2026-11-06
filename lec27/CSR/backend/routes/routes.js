const express=require("express")
const router=express.Router();
const Student=require("../models/student")

router.get("/students",async (req,res)=>{
    const data=await Student.find({})
    res.status(200).json({msg:"all student data",data});
})
router.delete("/students/:id",async(req,res)=>{
    console.log("hyyy")
    const {id}=req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({msg:"student deleted"});
})

module.exports=router;