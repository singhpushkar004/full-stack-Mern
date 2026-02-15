import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    email:'',
    password:''
  })
  const handleChange = (e)=>{
    setData(()=>(
      {...data,[e.target.name]:e.target.value}
    ))
  }
 const handlesubmit = async (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/login',data);
    if(res.data.msg=="Login Successfully"){
      localStorage.setItem("id",res.data.id);
      localStorage.setItem("msg",res.data.msg);
      navigate('/dashboard')
    }else{
      alert("Incorrect Credentials");
    }
    
 }  
  return (
   <>
        <form method='post' onSubmit={handlesubmit} >
            <input type="email" name="email" id="" placeholder='Enter Email'  onChange={handleChange}/>
            <br />
            <input type="password" name="password" onChange={handleChange} placeholder='Enter Password' id="" />
            <br />
            <input type="submit" value="Login" />
        </form>
   </>
  )
}

export default Login