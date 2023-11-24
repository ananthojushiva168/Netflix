import React,{useState}  from 'react'
import Headings from './Acoordin'
import SingleAcc from './SingleAcc'
import "./Sixth.css"


export default function Sixth() {
    const [focus, setFocus] = useState(false)
    const[value, setValue]= useState("")
  return (
    <div className='sixth-mainbox'>
    <div className='sixth-main'>
 
    <h1 className='heading-sixth'>Frequently Asked Questions</h1>
       <SingleAcc data={Headings}/> 
     <p className='sixth-main-p'>Ready to watch? Enter your email to create or restart your membership.</p>  
    </div>
    <div id='email-head'>
            <div id='email-field'>
              <input type="text" id='sixth-input' onFocus={() => setFocus(true)}  onBlur={() => !value ? setFocus(false) : setFocus(true)}
              value = {value}
              onChange = {(e)=>setValue(e.target.value)}
               />
              <div className='btn' id='btn'>Get Started</div>
            </div>
            <label className={focus ? 'labeltrue' : "label"}>Email address</label>
          </div>
          </div>
  )
}
