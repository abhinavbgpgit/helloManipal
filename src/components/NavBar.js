import React from 'react'
import './navbar.css'
import logo from '../images/manipal.png'

const Navbar = () => {
  return (
            
    <div className="n-wrapper">
    
    <div className="n-left">
        <div className="n-name">
          <img src={logo} alt='hmm' height="70px"></img>
        </div>
          </div>

    <div className="n-middle">       
        <div className="n-list">
        <ul style={{listStyleType: 'none'}}>               
                <li>Patient </li>
                <li>Payment</li>
                <li>Reports</li>  
                <li>Staff Info</li>              
            </ul>
            </div>
    </div>


    <div className="n-right" >
    <ul style={{listStyleType: 'none'}}>      
       <li><a href="">Log In</a></li>
       </ul>
        <button className="button n-button">
            Create your Account
        </button>
    </div>
</div>
        
   
  )
}

export default Navbar