let pr=new Promise((resolve,reject)=>{
    resolve("success")
})
console.log(pr);
let x=Promise.resolve("success");
console.log(x);