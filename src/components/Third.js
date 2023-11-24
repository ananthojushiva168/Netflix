import React from 'react'
import "./Third.css"
import Strange from "./images/sec3.jpg"
import Boxshot from "./images/Boxshot.png"
import DownloadGif from "./images/download-icon.gif"
export default function Third() {
  return (
    <div className='third-main'>
    
    <div className='img-position'>
    <div className='Strange-img'>
      <img src={Strange} alt="strange" />
      </div>
      <div className='flex-box'>
      <div className='Boxshot'>
        <img src={Boxshot} alt="box" />
        </div>
        <div className='box-two'>
        <h4>Stranger Things</h4>
        <p>Downloading...</p>
        </div>
        <div className='gif'>
        <img src={DownloadGif} alt="gif" className='gifimg'/>
        </div>
      </div>
    </div>
    <div className='third-second'>
     <h1>Download your shows to watch offline.</h1>
     <p>Save your favourites easily and always have something to watch.</p>
    </div>
    </div>
  )
}
