
import { Link, Routes, Route } from 'react-router-dom'
import  RegisterPage  from './Pages/RegisterPage'
import './App.css'
import LoginPage from './Pages/LoginPage'
import ChatWindows from './Pages/ChatWindows'
import { useState } from 'react'
import {LogOutUser} from './services/logOutService'

function App() {
  const [isAuthenticated, setIsAuthenticated]= useState(
    !!localStorage.getItem('authToken')
  );

  
  return (
    <>
      <div>
        <main>

          {isAuthenticated ?
          (<>
            <button onClick = {()=>LogOutUser(setIsAuthenticated)} >Log Out</button>
          </> ) :
          (<>
            <Link to='/'>Log In</Link> 
          </>

          )}
          !!
          {isAuthenticated ? 
            <>
            <Link to='/chatWindows' >Chat</Link>
          </>
          :
          <>
            <Link to='/register' >Register</Link>
          </>}

          

          <Routes>
            <Route path='/' element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/chatwindows' element={<ChatWindows/>}/>          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
