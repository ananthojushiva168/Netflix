import React, { useState } from 'react'
import './hero.css'
import Logo from "../components/images/netflix.png"
import { AiOutlineRight } from 'react-icons/ai';
export const Hero = () => {
  const [focus, setFocus] = useState(false)
  const[value, setValue]= useState("")
  
  return (
    <>
      <div className='main-hero'>
        <div className='hero-background-img'>
        </div>
      </div>
      <nav>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <select name="" id="">
            <option value="">English</option>
            <option value="">Telugu</option>
          </select>
          <button>Sign in</button>
        </div>
      </nav>
      <div className='hero-text-box'>
        <div>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='email-head'>
            <div className='email-field'>
              <input type="email" onFocus={() => setFocus(true)}  onBlur={() => !value ? setFocus(false) : setFocus(true)}
              value = {value}
              onChange = {(e)=>setValue(e.target.value)}
              required
              title='Email required'
               />
              <div className='btn'>Get Started <AiOutlineRight className='svg' /> </div>
            </div>
            <label id={focus ? 'labeltrue' : "label"}>Email address</label>
          </div>
        </div>
      </div>
    </>
  )
}
