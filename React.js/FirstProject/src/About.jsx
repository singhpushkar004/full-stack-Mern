import React, { useEffect,useState } from 'react'
import { ThContext } from './ThemeContext';
import { useContext } from 'react';


const About = () => {
  const a = useContext(ThContext)
  console.log(a);
  
   const [data , setData] = useState(0);
  useEffect(()=>{
    console.log("yahe table ka data hai");
    
  },[data])
  return (
    <div>
      <button onClick={()=>{
            setData(data+1);
        }}>Click</button>
    <p>{data}</p>
    </div>
  )
}

export default About