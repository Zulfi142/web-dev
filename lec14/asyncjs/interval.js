console.log("start");

let id=setInterval(()=>{
console.log("mid");
},30000);

console.log("end");

setInterval(()=>{
    clearInterval(id);
},10000);