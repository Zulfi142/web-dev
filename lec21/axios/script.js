// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })

async function fetchData(){
   let data = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(data.data)
  let img=document.createElement("img")
  img.src=data.data.message;
  document.body.appendChild(img);
}

fetchData();
axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        console.log(response.data.setup);
        console.log(response.data.punchline);
        let h2=document.createElement("h2")
        h2.innerHTML=response.data.setup;
        document.body.appendChild(h2);
        let h3=document.createElement("h3")
        h3.innerHTML=response.data.punchline;
        document.body.appendChild(h3);
    })
    .catch((error) => {
        console.log(error);
    });