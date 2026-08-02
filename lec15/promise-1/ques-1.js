console.log("start")
setTimeout(()=>{
    console.log("a")//baad mein kiunki call back queue mein jaayega aur event loop pehle micro queue ko daalega stack mein
},0);

let pr=Promise.resolve("B");//micro queue isiliye pehle chalega 

pr.then((x)=>{console.log(x)});
console.log("end")

