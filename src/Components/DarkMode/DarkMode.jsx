import React, { useEffect, useState } from 'react'
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import "./DarkMode.css"
const DarkMode = () => {
   const [mode,setmode]=useState("darkmode");
   function Dark()
    {  
        setmode(prev=>prev==="darkmode"?"lightmode":"darkmode")
    }
    useEffect(()=>{
        document.body.className=mode
    },[mode])
    return (
    <button className="darkmodebtn" onClick={()=>{Dark()}}>{mode==="darkmode"?<FiSun />:<FaMoon/>}</button>
    )
}

export default DarkMode