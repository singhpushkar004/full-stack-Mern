import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate();
  let msg = localStorage.getItem("msg")
  if(msg=="Login Successfully"){
      console.log("logged in");
      
  }else{
    useEffect(()=>{
      navigate('/login');
    },[])
  }


const [file ,setFile] = useState({
  picture:''
});
const handleChange = (e)=>{
  setFile(()=>({...file,[e.target.name]:e.target.value}))
 
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  // console.log(file);
  const id = localStorage.getItem('id');
  const res = await axios.put(`http://localhost:5000/api/upload/${id}`,file)
  console.log(res);
  
  

}
  return (
    <div>Dashboard

      <button onClick={()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("msg")
        navigate('/login')
      }}>Logout</button>

      {/* file uploading code started  */}
      <form method='post' encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="file">Choose File</label>
        <input type="file" name="picture" id="file" onChange={handleChange}/>
        <input type="submit" />
      </form>
      {/* file uploading code ending */}
    </div>
  )
}

export default Dashboard