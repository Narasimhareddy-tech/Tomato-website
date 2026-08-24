import React, { useContext, useState } from 'react'
import './Navbar.css' 
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../StoreContext/StoreContext'
const Navbar = ({setshowlogin}) => {
    const navigate = useNavigate();
    const [menu,setmenu]=useState('Home');
    const {gettotalamount}=useContext(StoreContext)
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
        <ul className='navbar-menu'>
            <Link  to ='/' onClick={()=>setmenu('Home')}  className={menu==='Home'?'active':''}>Home</Link>
            <a  href='#explore-menu'       onClick={()=>setmenu('Menu')} className={menu==='Menu'?'active':''}>Menu</a>
            <a  href='#app-download'      onClick={()=>setmenu('Mobile-App')} className={menu==='Mobile-App'?'active':''}>Mobile-App</a>
            <a href='#footer' onClick={()=>setmenu('Contact-Us')} className={menu==='Contact-Us'?'active':''}>Contact-Us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" onClick={()=>navigate('/cart')} />
                <div className={gettotalamount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setshowlogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar