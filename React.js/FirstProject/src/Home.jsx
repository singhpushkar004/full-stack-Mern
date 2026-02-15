import React,{useState} from 'react'

const Home = () => {


  
  const [data, setData]  = useState({
    name:"",
    branch:"",
    role:"",
  });
 
  const handleChange = (j)=>{
    setData({...data,[j.target.name]:j.target.value})
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

  }
   console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text"  name='name' onChange={handleChange}/>
      <input type="text" name='branch' onChange={handleChange}/>
      <input type="text" name='role' onChange={handleChange}/>
      <input type="submit" />
      </form>
    </div>
  )
}

export default Home