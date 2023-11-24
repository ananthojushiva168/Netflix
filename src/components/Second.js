import React from 'react'
import "./Second.css"
import Tv from "./images/tv.png"
import Brvideo from "./images/video1.mp4"
export default function Second() {
  return (
    <div className='second-main'>
    <div id='second-box'>
        <h1>Enjoy on your TV.</h1>
        <p>Watch on smart TVs, PlayStation, Xbox, 
        Chromecast, Apple TV, Blu-ray players and more.</p>
    </div>
    <div className='video-box'>
    <div>
<img src={Tv} alt="tv" className='tv-img'/>
</div>
<video autoplay="autoplay" loop muted >
      <source src={Brvideo} type="video/mp4"/>
     </video>
    </div>
    </div>
  )
}
