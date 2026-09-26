//read aur write sirf String smjhega
const fs = require("fs");
const path = require("path");

function readfile(filename){
    const loc=path.join(__dirname,"data",filename);

    return new Promise((resolve,reject)=>{
       fs.readFile(loc,"utf-8",(err,data)=>{
        if(err){
        reject(err);
        }
        else{
         resolve(data);
        }

       })
    })
}

readfile("input-1.txt")
.then((data1)=>{
    console.log(data1)
    let arr1=data1.split(" ")
    readfile("input-2.txt")//nesting bcz agr ek mein error aayega to koi sa nhii chalega isse merging mein asaani hogi
    .then((data2)=>{
        console.log(data2)
        let arr2=data2.split(" ")//isse string array mein convert ho jaayegi split hoke space se
        let finalData=[...arr1,...arr2];
        finalData.sort((a,b)=>a-b);
        console.log(finalData);
        let outputData=finalData.join(" ");
        // let outputData=finalData.toString(); isse , bhi aayega
        console.log(outputData);

        let loc=path.join(__dirname,"data","output.txt");
        fs.writeFile(loc,outputData,(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Done")
        })
    })
})
.catch((err)=>{
    console.log(err)
})



