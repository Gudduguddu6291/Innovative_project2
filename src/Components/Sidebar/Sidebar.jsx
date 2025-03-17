import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { dataContext } from '../../context/usercontext';
function Sidebar() {
    const {sent,prevprompt,newChat}= useContext(dataContext)
    const[extend,setextend]= useState(false)
    async function loadprevprompt(prompt)
    {
      sent(prompt)
    }
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>
            {setextend(prev=>!prev)  
            }
        }/>
        <div className="newchat" onClick={()=>newChat()}>
         <FaPlus />
         {extend?<p>New Chat</p>:null}
        </div>
          {prevprompt.map((item,index)=>{
            return(
              <div className="recent" onClick={()=>{
                loadprevprompt(item)
              }}>
              <FaRegMessage />    
              {extend?<p>{ item.slice(0,10)+"..."}</p>:null}
              </div>
            )
          })}
       
    </div>
  )
}

export default Sidebar