console.log("start")
var a=10;
function outer(){
    let p=11;
    a++;
    function inner(){
        var a=25;
        a++;
        p++;
        console.log(a);
        console.log(p);
        function innermost(){
            let x="hello";
            console.log(a);
            console.log(x);
        }
        innermost();
        console.log("hello jii")
    }
    inner();
    console.log(y);
    let y=10;
}
console.log("js");
outer();
console.log("end");