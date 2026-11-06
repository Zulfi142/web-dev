const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
app.use(cookieParser('zulfi@123'));

// app.get("/",(req,res)=>{
//     res.send("home page")
// })
// app.get("/set-cookie",(req,res)=>{
//     res.cookie("x",1000);//add cookie
//     res.send("set-cookie")
// })
// app.get("/get-cookie",(req,res)=>{
//     console.log(req.cookies);
//     res.send("okk");
// })
// app.get("/store",(req,res)=>{
//     res.cookie("discount",5000);
//     res.send("you visited store");
// })
// app.get("/buy",(req,res)=>{
//     let price=20000;
//     let finalprice;
//     let {discount}=req.cookies;
//     if(discount){
//      finalprice=price-discount;
//     }else{
//        finalprice=price;
//     }
//     res.send(`total price=${finalprice}`);
// })

app.get("/store",(req,res)=>{
    res.cookie("discount",5000,{signed:true});
    res.send("you visited store");
})
app.get("/buy",(req,res)=>{
    let price=20000;
    let finalprice;
    console.log(req.signedCookies);
    let {discount}=req.signedCookies;
    if(discount){
     finalprice=price-discount;
    }else{
       finalprice=price;
    }
    res.send(`total price=${finalprice}`);
})

app.listen(3000,()=>{
    console.log("connected")
})