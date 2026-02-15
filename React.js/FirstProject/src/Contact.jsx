import React, { useEffect, useState } from 'react'
import { ThContext } from './ThemeContext';
import { useContext } from 'react';


const Contact = () => {
  const a = useContext(ThContext);
  console.log(a);
  
     const [data,setData] = useState(0);
     const [d,setD] = useState(0);
    useEffect(()=>{
        console.log('hiiii');
        
    },[data,d])
   
  return (
    <div>
        <button onClick={()=>setData(data+1)}>Count {data}</button>
        <button onClick={()=>setD(d+1)}>Count {d}</button>
    </div>
  )
}

export default Contact