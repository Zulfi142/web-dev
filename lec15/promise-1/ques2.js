console.log("START");
setTimeout(()=>{
    let pr = Promise.resolve("A")
    pr.then((data)=>{console.log(data)})
    console.log("Hello");
},5000)

setTimeout(()=>{//is block ko bhi same treatment milega jese poori file ko milta h
    let pr = Promise.resolve("B")
     pr.then((data)=>{console.log(data)})
    console.log("World");
},0)

let x =Promise.resolve("C");

x.then((data)=>{console.log(data)});


console.log("END");