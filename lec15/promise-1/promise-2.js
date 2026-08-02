function kalmilneaayega(res){
  //return promise
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     if(res){
        resolve("theek h mein wait krunga")
     }
     else{
        reject("chal koi nhii")
     }
    },4000)
  })
}
console.log("start")
//dost
// let x=kalmilneaayega(true);
// console.log(x); //print promise bcz it returns promise
kalmilneaayega(false)
.then((msg)=>{
  console.log(msg)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("okk");
})
console.log("end");


