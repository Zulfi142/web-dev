let pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("hello")
    },10000)
});
let pr2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("world")
    },5000)
});
let pr3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("bullo")
    },7000)
});
//jiska timer km hai wo result aayega
// Promise.race([pr1,pr2])
//    .then((data)=>{
//     console.log(data);
//    })
//    .catch((error)=>{
//     console.log(error);
//    })
//dono ka result aayega array form mein but jb dono pending se hatt jaayenge jb result aayega
//    Promise.allSettled([pr1,pr2])
//    .then((data)=>{
//     console.log(data);
//    })
//    .catch((error)=>{
//     console.log(error);
//    })
//sirf resolved ka result dega aur 2 resolve honge to jiska timer km hoga wo aayega 
//saare promise ke function promise hi return krega
//    Promise.any([pr1,pr2])
//    .then((data)=>{
//     console.log(data);
//    })
//    .catch((error)=>{
//     console.log(error);
//    })

   Promise.all([pr1,pr2,pr3])
   .then((data)=>{
    console.log(data);
   })
   .catch((error)=>{
    console.log(error);
   })


