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
import Payment from './Screens/PaymentScreen/Payment'
import MovieTckects from './Screens/MovieTickts/MovieTckects'
import CreateIpl from './Screens/Booking/CreateIpl'
import CreateMovie from './Screens/Booking/CreateMovie'
import Liveshow from './Screens/LiveShow/Liveshow'
import Profile from './Screens/AdminPannel/Profile'
import CommingSoon from './Screens/CommingSoon/CommingSoon'
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
      <Route path='/bookingScreen' element={<BookingScreen/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/Movie' element={<MovieTckects/>}/>
      <Route path='/createipl' element={<CreateIpl/>}/>
      <Route path='/createMovie' element={<CreateMovie/>}/>
      <Route path='/liveshow' element={<Liveshow/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/commingSoon' element={<CommingSoon/>}/>



    </Routes>
    </div>
  )
}

export default App
