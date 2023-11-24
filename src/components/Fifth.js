import React, { useState } from 'react'
import Childern from "./images/children.png" 
import "./Fifth.css"
export default function Fifth() {
  const [name, setNAme] = useState()
  return (
    <div className='fifth-main'>
    
        <div className='fifth-img'>
         <img src={Childern} alt="lo" />
        </div>
        <div className='fifth-second'>
        <h1>Create profiles for children.</h1>
        <p>Send children on adventures with their favourite characters in 
        a space made just for them—free with your membership.</p>
        </div>
    </div>
  )
}
