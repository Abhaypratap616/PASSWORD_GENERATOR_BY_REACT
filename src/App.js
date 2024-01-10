import React, { useCallback, useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const[length ,setlength]= useState("6");
  const[numberallowed,setnumberallowed]= useState(false);
  const[spcharallowed,setspcharallowed]= useState(false);
  const[password,setpassword]= useState("");

  const passwordgenerator = useCallback(()=>{
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberallowed) charset+="0123456789";
    if(spcharallowed) charset+="!`@#*&^%$~()?/\\><{}[]";
    let passwordmake = "";
    for (let i = 0; i <=length; i++) {
      const randomIndex = (Math.floor(Math.random() * charset.length)+1);
      passwordmake += charset.charAt(randomIndex);
    }
    setpassword(passwordmake);


  },[length,numberallowed,spcharallowed]);

  const copybutton =()=>{
    navigator.clipboard.writeText(password);
  }

useEffect(()=>{passwordgenerator()},[length,numberallowed,spcharallowed,passwordgenerator]);  
  return (
    <div>

    <div>
      <h2 className='heading'>Password-Generator-System</h2>
    </div>
    <div className="input">
      <input type="text" value={password} placeholder='Password' />
      <button className='btn-1' onClick={copybutton} >Copy</button>
    </div>
    <div className="range">
      <input type="range" min={6} max={20} value={length} className='under-range-1' onChange={(e)=>{setlength(e.target.value)}} />
      <label>Lenght:{length}</label>
    </div>
    <div className="checkbok">
      <input type = "checkbox"  defaultChecked={numberallowed} className='under-range-2' onChange={()=>{setnumberallowed((prev)=>!prev)}}/>
    <label>Numbers</label>
    <input type = "checkbox"  defaultChecked={spcharallowed} onChange={()=>{setspcharallowed((prev)=>!prev)}}/>
    <label>specialcharallowed</label>


    </div>



    </div>
    
  )
}
