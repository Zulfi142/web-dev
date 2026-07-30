let std=[
    {
        name:'rahul',
        marks:75,
        city:"Noida"
    },
    {
        name:'ajay',
        marks:64,
        city:"Delhi"
    },
    {
        name:'teena',
        marks:56,
        city:"Pune"
    }
];

// std.find((item,ind,arr)=>{
//     console.log(item,ind,arr);
// })
// let x=std.find((item)=>{
//     return item.name=="ajay"
// });

let x=std.find(item =>item.name=="ajay");
//only 1 returns pehla waala jaayega
console.log(x);

// (z)=>{
//     return 40;
//} can be write like this work same
// z=>40;
let fun =z=>z*2;
let p=fun(15);
console.log(p);

// console.log(4+"9"+"6"*3);