import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setshowlogin}) => {
    const [CurrentState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{CurrentState}</h2>
                <img  onClick={()=>setshowlogin(false)}  src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {CurrentState==="login"?<></>:<input type="text" placeholder='Your Name'  required/>}
                <input type="email"  placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{CurrentState==="SignUp"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing i agreeto the terms of i use & privacy policy</p>
            </div>
            {CurrentState==="login"?
            <p>Create a new account? <span className='c'   onClick={()=>{setCurrentState("SignUp")}}>Click here</span></p>
            :<p>Already have an account? <span className='c'    onClick={()=>{setCurrentState("login")}}>Login here</span></p>}
        
        </form>
    </div>
  )
}

export default Login