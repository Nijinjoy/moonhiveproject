import { Button } from '@mui/material'
import React from 'react'
import './Footer.css'
import { FaGoogle,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
      <div className='sb__footer-links'>
      <div className='sb__footer-links-div'>
      <h2>Learn</h2>
      <a href='/library'>
        <p>Library</p>
      </a>
      <a href='/featured'>
      <p>Featured</p>
      </a>
      <a href='/Exposure'>
      <p>Exposure</p>
      </a>
      <a href='/paths'>
      <p>Learning Paths</p>
      </a>
      </div>
      <div className='sb__footer-links-div'>
      <h2>Join Us</h2>
      <a href='/library'>
        <p>Pricing</p>
      </a>
      <a href='/featured'>
      <p>Login</p>
      </a>
      <a href='/Exposure'>
      <p>Sign Up</p>
      </a>
      <a href='/paths'>
      <p>Payment</p>
      </a>
      </div>
      <div className='sb__footer-links-div'>
      <h2>Community</h2>
      <a href='/library'>
        <p>Discussions</p>
      </a>
      <a href='/featured'>
      <p>Ask Questions</p>
      </a>
      <a href='/Exposure'>
      <p>Student Profile</p>
      </a>
      <a href='/paths'>
      <p>Instructor Profile</p>
      </a>
      </div>
      <div className='sb__footer-links-div'>
        <h2>Tutorio</h2>
        <p>Tutorio is an online learning platform that helps anyone achieve the personal and professional growth</p>
      </div>
      </div>
      <hr/>
      <div className='row'>
      <p className='col-sm' style={{textAlign:'center'}}>
        Copyright 2022@ All rights reserved
        <div className='media'>
      <Button><FaGoogle style={{width:'90px',height:'20px'}}/></Button>
      <Button><FaFacebookSquare style={{width:'90px',height:'20px',marginLeft:'-40px'}}/></Button>
      <Button><FaLinkedin style={{width:'90px',height:'20px',marginLeft:'-40px'}}/></Button>
      </div>
      </p>

      <div className='terms'>
      <a href='#' style={{padding:'30px'}}>Terms</a>
      <a href='#'>Conditions</a>
      </div>
      <button >English</button>
      </div>
      </div>
    </div>
  )
}

export default Footer
