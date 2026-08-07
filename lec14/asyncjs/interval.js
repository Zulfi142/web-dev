console.log("start");

let id=setInterval(()=>{//har 3 second mein mid print karega infinitely kiun ki ek id 
// bnn gyi h jo baar baar call hogi in every 3 seconds
console.log("mid");
},3000);

console.log("end");

setInterval(()=>{//ye us infinite process ko rok dega id ko 10 sec baad clear karke
    clearInterval(id);
},10000);