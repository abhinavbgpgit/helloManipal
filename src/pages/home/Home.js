import React from 'react'
import './home.css'
import physio from '../../images/physio_pic.png'
import physio1 from '../../images/physiotherapist.jpg'
import pain1 from '../../images/pain.jpg'
import pain2 from '../../images/pain1.jpg'
import pain3 from '../../images/pain3.jpg'
import { motion } from 'framer-motion' 

const Home = () => {
  return (
    <div className='main_home'>

<div className='left_home p-11'>
<div className='flex items-center justify-center flex-col mt-48 m-0'>
  <div className='font-bold text-9xl text-rose-500 heading'> MANIPAL </div>
  <div className='font-bold text-5xl text-cyan-900 phy'> PHYSIOTHERAPY CENTER</div>
  </div>
</div>



<div className='right_home'>
<div className='right_home_picture'>
<img className='physio_picture' src={physio1} alt='jj' height="500px"></img>
</div>
<div className='right_home_picture-rotate'>
</div>

<div className='right_home_animation'>
  <div className='div1'><img className='pain1' src={pain2} alt='jj' height="230px"></img></div>
  <div className='div2'><img className='pain2' src={pain3} alt='jj' height="200px"></img></div>
  <div className='div3'><img className='pain3' src={pain1} alt='jj' height="200px" width="300px"></img></div>
</div>


{/* <div className='right_home_stars'>
<div className='star'><i class="fa-regular fa-star fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-plus fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-clover fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-heart fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-certificate fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-star fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-gear"></i></div>


</div> */}
</div>
</div>
    
  )
}

export default Home