import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Screens/Home/Home'
import Footer from './Screens/Layouts/Footer'
import Header from './Screens/Layouts/Header'
import Register from './Screens/Auth/Register'
import Login from './Screens/Auth/Login'
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App
