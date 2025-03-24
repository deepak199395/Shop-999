import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Screens/Home/Home'
import Footer from './Screens/Layouts/Footer'
import Header from './Screens/Layouts/Header'
import Register from './Screens/Auth/Register'
import Login from './Screens/Auth/Login'
import Carosel from './Screens/Carosel/Carousels'
import Admin from './Screens/AdminPannel/Admin'
import BalconyTckets from './Screens/Products/Ipl'
import BookingScreen from "../src/Screens/Products/BookingScreen"
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/carousels' element={<Carosel/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/balconyTicked' element={<BalconyTckets/>}/>
      <Route path='bookingScreen' element={<BookingScreen/>}/>
     </Routes>
    </div>
  )
}

export default App
