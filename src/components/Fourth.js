import React from 'react'
import Device from "./images/device.png"
import Brvideo from "./images/video2.mp4"
import "./Fourth.css"
export default function Fourth() {
  return (
    <div className='Fourth-main'>
    <div id='fourth-co'>
        <h1>Watch everywhere.</h1>
        <p className='para'>Stream unlimited movies and TV shows on your
         phone, tablet, laptop, and TV.</p>
    </div>
    <div className='Fourth-box'>
    <div>
<img src={Device} alt="tv" className='tv-img'/>
</div>
<video autoplay="autoplay" loop muted >
      <source src={Brvideo} type="video/mp4"/>
     </video>
    </div>
    </div>
  )
}
