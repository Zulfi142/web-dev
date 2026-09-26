var colors = require('colors');
console.log("hello".green);
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('i like cake and pies'.underline.red) // outputs red underlined text


const figlet = require('figlet');
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet("Coder!",function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.green);
})

