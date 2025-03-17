import { useContext, useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import ChatSection from './Components/ChatSection/ChatSection'
import Separation from './Components/Separation/Separation'
import { dataContext } from './context/usercontext'

function App()
{
  
  return (
    <>
     <Sidebar/>
     <Separation/>
     <ChatSection/>
    </>
  )
}

export default App
