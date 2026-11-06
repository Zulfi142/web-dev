let baseUrl="http://localhost:3000";
const studentList=document.querySelector(".student-List")
const fetchStudents=async()=>{
    // const res=axios.get("http://localhost:3000/students");
    const res=await axios.get(`${baseUrl}/students`);
    console.log(res.data.data);
    DisplayStudents(res.data.data);
}
fetchStudents();

const DisplayStudents=(data)=>{
      for(let student of data){
        const div=document.createElement("div")
        div.classList.add("card");
        const str=`<p>${student.name}</p>
                <p>${student.email}</p>
                <p>${student.course}</p>
                <div>
                    <button onclick="EditStudent('${student._id}')" >Edit</button>
                    <button onclick="DeleteStudent('${student._id}')" >Delete</button>
                </div>`
                div.innerHTML=str;
                studentList.append(div);

      }
}

let DeleteStudent= async(id)=>{
     console.log(id);
     const res=await axios.delete(`${baseUrl}/students/${id}`)


}
let EditStudent=(id)=>{
    window.location.href=`edit.html`
}


