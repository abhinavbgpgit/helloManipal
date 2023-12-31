import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../images/manipal.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {


  const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
            
    <div className="n-wrapper">
    
    <div className="n-left">
        <div className="n-name">
        <NavLink to="/">  <img  className="logo"src={logo} alt='hmm' ></img></NavLink>
        </div>
          </div>

    <div className="n-middle">       
        <div className="n-list">
        <ul style={{listStyleType: 'none'}}>               
                <li><NavLink className='link' to="/patient">Patient</NavLink> </li>               
                <li><NavLink className='link' to="/payment">Payment</NavLink></li>
                <li><NavLink className='link' to="/reports">Reports</NavLink></li>  
                <li><NavLink className='link' to="/staffinfo">Staff Info</NavLink></li>              
            </ul>
            </div>
    </div>


    <div className="n-right" >         
      <NavLink className='link border-2 border-red-600 mr-5' to="/login">Log Out</NavLink>
      <div>
      <p> {currentTime.toLocaleTimeString()}</p>
      <p> {currentTime.toDateString()}</p>
    </div>
      
    </div>
</div>
        
   
  )
}

export default Navbar