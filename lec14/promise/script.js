// let pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("successfull");
//         // reject("unsuccessfull");
//     },2000);
// });
// console.log(pr); 

let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successfull");
        // reject("unsuccessfull");
    },5000)
    });

    console.log("hyy");

    pr 
    .then((data)=>{
        console.log("inside .then"); // when promise is resolved, this block will be executed
        console.log(data);
    })
    .catch(()=>{
        console.log("inside .catch"); // when promise is rejected, this block will be executed
    });

    console.log("end");
