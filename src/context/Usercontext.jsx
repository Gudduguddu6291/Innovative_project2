import React, { createContext, useState } from 'react'
import run from '../gemini'
export const dataContext=createContext();
const Usercontext = ({children}) => {
  const [input,setinput]=useState("")
  const [showResult,setshowResult]=useState(false)
  const [loading,setloading]=useState(false)
  const [resultData,setresultData]=useState("")
  const [recentprompt,setrecentprompt]=useState("")
  const [prevprompt,setprevprompt]=useState([])

  function newChat()
  {
    setshowResult(false)
    setloading(false)
  }

  async function sent(input) {
      setresultData("")
      setrecentprompt(input)
      setshowResult(true)
      setloading(true)
      setprevprompt(prev=>[...prev,input])
      let response=await run(input)
      setresultData(response.split("**")&&response.split("*"))
      setloading(false)
      setinput("")
  }
  const data ={
      input,
      setinput,
      sent,
      loading,
      setloading,
      showResult,
      setshowResult,
      resultData,
      setresultData,
      recentprompt,
      setrecentprompt,
      prevprompt,
      setprevprompt,
      newChat
  }
  return (
    <>
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>
    </>
  )
}

export default Usercontext