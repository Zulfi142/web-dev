let obj={
    name:"rahul",
    age:45,
    city:"Delhi"
}
// let student={
//     FirstName:"fawwaz",
//     LastName:"Pathaan",
//     age:21,
//     Course:"Btech",
//     marks:[8,1,7,2,3]
// }
// console.log(student.age);
// console.log(student.Course);
// console.log(student.marks[1]);
 
let student={
    fullname:"rahul singh",
    "full name":"Rahul sing",
    age:21,
    Course:"Btech",
    marks:[8,1,7,2,3]
}
console.log(student["full name"]);
console.log(student.fullname);
//for in loop
for(let key in student){
    console.log(key);
    console.log(student[key]);

}
//
