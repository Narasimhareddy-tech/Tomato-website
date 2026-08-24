import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home/Home'
import Cart from './Components/pages/Cart/Cart'
import Order from './Components/pages/Placeorder/Order'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
const App = () => {
  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
      </Routes>
     <Footer/>
    </div>
    </>
  )
}

export default App