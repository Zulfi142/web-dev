// let obj={
//     name:"fawwaz",
//     lastname:"khan",
//     printfullname:function(){
//         console.log(this.name+" "+this.lastname);
//     }
// }
// obj.printfullname();


// let obj1={
//     name:"fawwaz",
//     lastname:"Pathaan",
// }
    
// obj.printfullname.call(obj1);

//call && apply && bind;
 let printfullname=function(hometown,state){
        console.log(this.name+" "+this.lastname+" from "+hometown+" "+state);
    }
// let obj={
//     name:"fawwaz",
//     lastname:"khan",
//}
// printfullname.call(obj,"Abc","mp");
// printfullname.apply(obj,["Abc","mp"]);
// let x = printfullname.bind(obj,"def","up");
// console.log(x);
// x();

let obj1={
    name:"fawwaz",
    lastname:"Pathaan",
}    
// printfullname.call(obj1,"def","up");
// printfullname.apply(obj1,["def","up"]);
// let y = printfullname.bind(obj1,"abc","mp");
// console.log(y);
//y();
let y = printfullname.bind(obj1,"abc","mp")();//direct calling







