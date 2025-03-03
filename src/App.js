import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Login from './pages/Login'
import Register from './pages/Register'
import Save from './pages/Save'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          
          <Route path='/Save' element={<Save/>}/>
           <Route  path='/login' element={<Login/>}/>
          <Route  path='/Register' element={<Register/>}/>
          <Route  path='/Add' element={<Add/>}/>
        </Routes>
      </Router>
   </>
  )
}

export default App
