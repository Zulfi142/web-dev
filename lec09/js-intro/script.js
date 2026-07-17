console.log("hello");

// var let const

var x=30;
var x;
x=60;
console.log(x);

let a=11;
// let a; cant do this
a=15;
console.log(a);

const b=30;
//  b=40; cant do this 
// const b; cant do this

// const z; ye bhi nhii kar sakte hain
// z=15;
const data="hello ji";
console.log(data);
// api call ke liye use hoga
{
    var p=10;
    let q=11;
    const r=12;
    console.log(p,q,r);
}
console.log(p);//running bcz it is a global/functional scope
// console.log(q);  dono nhii chalenge bcz of block scope
// console.log(r);