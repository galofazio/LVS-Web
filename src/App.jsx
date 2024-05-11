import { useState } from 'react'
import {AsideRight} from './aside-right.jsx'
import {AsideLeft} from './aside-left.jsx'
import './App.css'
import { Login } from './login.jsx'
import { Register } from './register.jsx'
import { Forum } from './forum.jsx'
import { Tournaments } from './tournaments.jsx'

function App() {

  const [viewLogin, setViewLogin] = useState(false)
  const [viewTournaments, setViewTournaments] = useState(false)
  const [viewRegister, setViewRegister] = useState(false)
  const [viewForum, setViewForum] = useState(true)

  const toggleComponent = () => {
      if(viewForum == true){
        setViewForum(false)
        setViewTournaments(true)
      } else {
        setViewForum(true)
        setViewTournaments(false)
      }
  }

  const toggleLogin = () => {
    if(viewLogin == false){
     if(viewRegister == true){
       setViewForum(true)
       setViewRegister(false)
     } else {
      setViewLogin(true)
      setViewForum(false)
     }
     setViewTournaments(false)
     } else {
     setViewLogin(false)
     setViewTournaments(false)
     setViewForum(true)
   }
}

const toggleRegister = () => {
    setViewLogin(false)
    setViewRegister(true)
}


  


  return (
    <>
      <header id="topMenu">
        <ul>
          <li>
            <img id="logoTopMenu" src="/LVS.png" alt="logo"/>
          </li>
          <li id="doubleLink">
              <a onClick={viewForum === false ? toggleComponent : null} >FORO</a>
              <a onClick={viewTournaments === false ? toggleComponent : null} >TORNEOS</a>
          </li>
          <li>
            <svg onClick={toggleLogin} id="profileIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          </li>
        </ul>
      </header>
      
      <body>
        <AsideLeft />
        <main id='main'>
          {viewForum ? <Forum/> : <></>}
          {viewTournaments ? <Tournaments/> : <></>}
          {viewLogin ? <Login toggleRegister={toggleRegister}/> : <></>}
          {viewRegister ? <Register/> : <></>}
        </main>
      <AsideRight />

      </body>


    </>
  )
}

export default App
