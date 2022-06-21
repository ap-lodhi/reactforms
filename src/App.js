import './App.css';
import React from "react"

function App() {
const [data ,setData] =React.useState([])
const [formData , setFormData] =React.useState({
  name:"",
  age:"",
  address:"",
  department:"",
  salary:"",
  marital:false,

})


const getData= () =>{

  fetch(` http://localhost:3003/data ` )
      .then((res) => res.json())
      .then((res) => {
          setData(res);
      })
      .catch((err) => {
          
          setData([]);
      })
    }
    React.useEffect(() =>{

      getData();
      } ,[])
      
const handleChange =(e) =>{
  const {name ,value} =e.target;
  setFormData({...formData, [name]:value});
};

const handleSubmit =(e)=>{
  e.preventDefault();
  const payload ={
    title:name,
    age:age,
    add:address,
    dep:department,
    salary:salary,
    marital:marital
  }
    fetch(`http://localhost:3003/data`,{
      method:"POST",
      body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
    })
    .then((res) => res.json())
    .then((res) => {
      getData();
  });
  // setFormData("")
}
// console.log(data)
const {name ,age, address ,department,salary ,marital } = formData;

  return (
    <div >
      <div  className="App">

     <h1>Employee Details</h1>
     <form onSubmit={handleSubmit}>

     <input type='text' placeholder='Enter Name'name='name' onChange={handleChange} value={name} />
     <br/>
     <br/>
     <input type='number' placeholder='Enter Age'name='age' onChange={handleChange} value={age} />
     <br/>
     <br/>
     <input type='text' placeholder='Enter Address' name='address' onChange={handleChange} value={address} />
     <br/>
     <br/>
     <label for="pet-select" name='department' value={department}  >Choose a Deparment:</label>
<select name="pets" id="pet-select">
    <option onChange={handleChange} value={""}>--Please choose an option--</option>
    <option onChange={handleChange} value={"hr"}>Hr</option>
    <option onChange={handleChange} value="full">full Satack devolper</option>
    <option onChange={handleChange}  value="front">Frontend</option>
    <option onChange={handleChange} value="back">Backend</option>
    <option onChange={handleChange} value="ase">Associate software eng</option>
    <option onChange={handleChange} value="manager">Manager</option>
</select>
     <br/>
     <br/>
     <input type='number' placeholder='Enter Salary' name='salary' onChange={handleChange} value={salary} />
     <br/>
     <br/>
     <label>
         Is MARRIED :{" "}
          <input
            type="checkbox" name='marital' value={marital}
            />
        </label>

     <br/>
        <input type='submit' placeholder='submit' />

     </form>
            </div> 
            
            {data.map((e) =>(
             <table style={{border:'1px solid gray'}}>
            
             <tr style={{border:'1px solid gray'}}>
               <th style={{border:'1px solid gray'}}>Name</th>
               <th style={{border:'1px solid gray'}}>Age</th>
               <th style={{border:'1px solid gray'}}>Address</th>
               <th style={{border:'1px solid gray'}}>Deparment</th>
               <th style={{border:'1px solid gray'}}>Salary</th>
               <th style={{border:'1px solid gray'}}>Marital Status</th>
             </tr>
             <tr >
               <td key={e.id} style={{border:'1px solid gray'}}> {e.title}</td>
               <td key={e.id} style={{border:'1px solid gray'}}> {e.age}</td>
               <td key={e.id} style={{border:'1px solid gray'}}> {e.add}</td>
               <td key={e.id} style={{border:'1px solid gray'}}> {e.dep}</td>
               <td key={e.id} style={{border:'1px solid gray'}}> {e.salary}</td>
               <td key={e.id} style={{border:'1px solid gray'}}> {e.marital}</td>
              
             </tr>
            
           </table>
    ))} 
          
              
            
    </div>
  );
}

export default App;
