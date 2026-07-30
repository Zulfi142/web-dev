let obj={
    name:"raj",
    age:"45",
    city:"delhi"
}
// let name =obj.name;
// let age=obj.age;    instead of writing this we write this 
let {name,age,city}=obj;
console.log("name:",name,"age:",age);
let arr=[11,45,63,67];
// let a=arr[0];
// let b=arr[1];
// let c=arr[2];
// let d=arr[3];
//instead of writing this you can write this 
let[a,b,c,d]=arr;
console.log("a=",a,"b=",b,"c=",c,"d=",d);
