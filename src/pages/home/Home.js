import React from 'react'
import './home.css'
import physio from '../../images/physio_pic.png'
import physio1 from '../../images/physiotherapist.jpg'
import pain1 from '../../images/pain.jpg'
import pain2 from '../../images/pain1.jpg'
import pain3 from '../../images/pain3.jpg'

const Home = () => {
  return (
    <div className='main_home'>
<div className='left_home'>
<div className='left_home_div'>
  <div className='heading'> Manipal Physiotherapy Center</div>
  <div className='heading2'> A place for quality treatment & healthcare</div>
  <div className='heading3'> Physiotherapy as described by World Physiotherapy is a health care profession concerned with human function and movement and maximising physical potential.</div>
  <button className="button n-button chatan">
            Go To Patient Info
        </button>
</div>


</div>
<div className='right_home'>

<div className='right_home_picture'>
<img className='physio_picture' src={physio1} alt='jj' height="500px"></img>
</div>

<div className='right_home_animation'>

  <div className='div1'><img className='pain1' src={pain2} alt='jj' height="230px"></img></div>
  <div className='div2'><img className='physio_picture' src={pain3} alt='jj' height="200px"></img></div>
  <div className='div3'><img className='pain3' src={pain1} alt='jj' height="200px" width="300px"></img></div>
</div>


<div className='right_home_stars'>
{/* <div className='star'><i class="fa-regular fa-star fa-2x"></i></div> */}
<div className='star'><i class="fa-solid fa-plus fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-clover fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-heart fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-certificate fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-star fa-2x"></i></div>
<div className='star'><i class="fa-solid fa-gear"></i></div>


</div>
</div>
</div>
    
  )
}

export default Home