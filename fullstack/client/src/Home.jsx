import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        password:''
    });
    const [user , setUser] = useState([]);
    const [mode , setMode] = useState(false)
    const [editId , setEditId] = useState(null)
    const handleChange = (e)=>{
    setData(()=>({...data,[e.target.name]:e.target.value}))
        
    }
    // console.log(data);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(mode==true){
                let res = await axios.put(`http://localhost:5000/api/user/${editId}`,data);
                 handleFetch();
                data.name='';
                data.email=''
                data.password=''
                setMode(false)
                setEditId(null)
        }else{
            let res = await axios.post('http://localhost:5000/api/user',data);
        // console.log(res);
         handleFetch();
         data.name='';
         data.email=''
         data.password=''
        }
    }
    
   const handleFetch = async()=>{
        const res = await axios.get('http://localhost:5000/api/user')
        // console.log(res.data); 
        setUser(res.data);
   }
    useEffect(()=>{
        handleFetch();
    },[])
    console.log(user);
    
    const handleDelete = async (id)=>{
        const res = await axios.delete(`http://localhost:5000/api/user/${id}`)
        // console.log(res.data);
        alert(res.data)
        handleFetch();
        
    }   
   const  handleEdit = (b)=>{
    setData({
        name:b.name,
        email:b.email,
        password:b.password
    })
    setEditId(b._id);
    setMode(true)
   }
  return (
    <div>
        <form method='POST' onSubmit={handleSubmit}>
            Enter Name:
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <br />
            Enter Email:
            <input type="email" name="email" value={data.email}id="" onChange={handleChange}/>
            <br />
            Enter Password:
            <input type="password" value={data.password} name="password"onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>

        {/* table  */}
        <table border="1">
            <thead>
                <tr>
                    <td>S.N</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {user.map((item,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={()=>{handleDelete(item._id)}}>Delete</button>
                        <button onClick={()=>{handleEdit(item)}}>Edit</button>
                    
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home