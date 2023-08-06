import React, { useEffect,useState } from 'react'
import wave from '../../images/wave.png'
import bg from '../../images/bg.svg'
import avatar from '../../images/avatar.svg'
import exercise from '../../images/physio.webp'
import banner from '../../images/Physiotherapy1.png'
import './login.css';
import { FcManager } from 'react-icons/fc';
import { FcLock } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
const Login = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/src/users.json'); // Change the path if needed
        const jsonData = await response.json();
        console.log(jsonData.users)
        setUsers(jsonData.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
   
        
      <img className="wave" alt='hmm' src={wave}></img>
    
    <div className="container">
     
      <motion.div
    
    initial={{ x: "-100%" }}
    animate={{ x: "10%" ,}}
    transition={{duration: 1}}
    > 
     <div className="image">
        <img src={banner} alt='hmm' className='banner' ></img>
      </div>
    </motion.div>


    <motion.div
    
    initial={{ x: "100%" }}
    animate={{ x: "10%" ,}}
    transition={{duration: 1}}
    > 
      <div className="login-content">
       
          <img src={avatar} alt='hmm'></img>
          <h2 className="title">Welcome</h2>


          
<div class="flex">
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <FcManager style={{fontSize:"40px"}} />
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User Name.."></input>
</div>



<div class="flex" style={{marginTop:"30px"}}>
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <FcLock style={{fontSize:"40px"}} />
  </span>
  <input type="password" id="website-admin" class=" rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password.." ></input>
</div>
              
               Forgot Password?
                <input className="btn" onClick={()=>{navigate('/')}} value="Login"></input>
             
          </div>
          </motion.div>


      </div>
      </>
  )
}

export default Login