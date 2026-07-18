let arr1=[13,45,5,67];
let arr2=[35,12,7];

// let x=arr1.concat(arr2);
let y=arr2.concat(arr1);
// console.log(x);
console.log(y);

// let x = arr1.concat(arr2);
// let y = arr2.concat(arr1);

let x = [...arr1,"mid",...arr2];

console.log(x);

console.log(arr1.indexOf(5));//finds value on the base of index

let arr = [34,56,77,"abc",13.7,"end"];

console.log(arr[3])

// for(let i=0;i<arr.length;i++){
//     console.log(i);
//     console.log(arr[i]);
// }


for (let item of arr){
    console.log(item);
}
//use to iterate the array
//for off loop
//array pe for in bhi lg jaayega for in se index number aajayega;
for(let item in arr){
    console.log(item);
    console.log(arr[item]);
}
