import React from 'react'
import './landingPage.css'
import face from '../images/face1.webp'

const LandingPage = () => {
  return (
    <div className='hmm'>
          <img
        src={face}
        alt="Round Avatar"
        className="rounded-full w-37 h-32 "
        height="100px"
      />
      <div className="text-3xl font-bold underline">hello hidden</div>
    </div>
  )
}

export default LandingPage