const mongoose=require("mongoose");
const Student=require("./models/student");

mongoose.connect("mongodb://localhost:27017/webdevCSR")
.then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("DB not connected")
})

Student.create([
    {
        name: "Fawwaz Khan",
        email: "fawwaz@gmail.com",
        course: "B.Tech ECE"
    },
    {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        course: "B.Tech CSE"
    },
    {
        name: "Aman Singh",
        email: "aman@gmail.com",
        course: "BCA"
    }
]).then(()=>{
    console.log("seeded!")
});