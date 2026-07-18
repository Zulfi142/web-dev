const x="hello 'jii' ";
console.log(x);
var a='hello "jii" ';
console.log(a);
var c=`"hello" 'jii' `;
console.log(c);
let money =50;
// let temp="i have money rs"
let temp=`i have ${money} rs`;
console.log(temp);
 var str="This is a string";
 console.log(str);
 let p=str.replace("is","IS");
 console.log(p);
 let q=str.replaceAll("is","abc");
 console.log(q);
 let y=str.split("is");
//  retuen a array 
 console.log(y);

 let file="abc.jpeg";
 let filname=file.split(".")[0]+".zip";
 //zero means take the first part
 console.log(filname);

 let w="hello";
 let z="world";
 let n=w+" "+z;
 console.log(n);
 console.log(3+4+"temp");
 console.log(3+4+"4");
 console.log(3+4*"4");
 console.log(4+3*"6"+3-"12");//- * / in mein js string ko as a number treat krega..
 
