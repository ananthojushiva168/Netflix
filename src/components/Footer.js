import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='Footer-box'>
    <div className='footer-heading'> 
      <h1 className='footer-h1'>Questions? Call 000-800-040-1843</h1>
      </div>
      <div className='footer-box-1'>
     <div className='footer-box-child'>
 <p>FAQ</p>
 <p>Investor Relations</p>
 <p>Privacy</p>
 <p>Speed Test</p>
 
     </div>
     <div className='footer-box-child'>
<p>Help Centre</p>
<p>Jobs</p>
<p>Cookie Preferences</p>
<p>Legal Notices</p>
     </div>
     <div className='footer-box-child'>
<p>Account</p>
<p>Ways to Watch</p>
<p>Corporate Information</p>
<p>Only on Netflix</p>
     </div>
     <div className='footer-box-child'>
<p>Media Centre</p>
<p>Terms of Use</p>
<p>Contact Us</p>
     </div>
    </div>
    <div className='footer-btn'>
    <select>
            <option className='footer-btn-option'>English</option>
            <option className='footer-btn-option'>Telugu</option>
          </select>
          <p>Netflix India</p>
          </div>
    </div>
  )
}
