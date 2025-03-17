import React, { useContext } from 'react'
import "./ChatSection.css"
import { IoSend } from "react-icons/io5";
import DarkMode from '../DarkMode/DarkMode'
import { dataContext } from '../../context/usercontext';
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'
const ChatSection = () => {
  let {input,setinput,sent,showResult,resultData,recentprompt,loading} = useContext(dataContext)
  return (
    <div className='chatsection'>
        <div className="topsection">
    {!showResult?<div className="heading">
            <span>HELLO ADITYA,</span>
            <span>I'm Your Own Assistant</span>
            <span>What can I help you...?</span>
            </div>:<div className='result'>

                <div className='userbox'>
                <img src={user} alt="" width="60px" />
                <p>{recentprompt}</p>
                </div>
              
                <div className='aibox'>
                <img src={ai} alt="" width="60px" />
                  {loading?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                  </div>
                  :
                  <p>{resultData}</p>}
                </div>

          </div>
          }
          

        </div>

        <div className="bottomsection">
          <input onChange={(e)=>setinput(e.target.value)} type="text" placeholder='Enter a prompt' value={input}/>
          {input?<button id="sendbtn" onClick={()=>{sent(input)}}><IoSend /></button>:null}
          <DarkMode/>
        </div>

    </div>
  )
}

export default ChatSection