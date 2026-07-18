function fun(){//function making
    console.log("inside fun function");
}
fun()//calling


// function abc(){
//     let x=40;
//     console.log("this is abc")
//     return x;
// }
// let a=abc();
// console.log(a);

// let b=abc;
// console.log(b);

// abc();
// b();

let b=function abc (){ //it is called anonymous function function without name
    let x=40;
    console.log("this is abc")
    return x;
}
console.log(b);
b();
// console.log(abc); cant be accessed ye bhool chuka h apne function name ab ye b hai

// let b=function () it is called anonymous function , function without name;
//let b=(a,b)=>{}.  it is called arrow function ;
let add=(a,b)=>{
    return a+b;
}
let p=add(4,6);
console.log(p);


