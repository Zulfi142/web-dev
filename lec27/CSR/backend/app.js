const express=require("express");
const app=express();
const cors=require("cors")
const  mongoose=require("mongoose");
// app.use(cors({origin:`http://127.0.0.1:5501`}));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/webdevCSR")
.then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("DB not connected")
})

//routes

app.get("/",(req,res)=>{
    res.json({msg:"Working Fine!"});
})

const StudenRoutes=require("./routes/routes");
app.use(StudenRoutes);

app.listen(3000,()=>{
    console.log("Running")
})