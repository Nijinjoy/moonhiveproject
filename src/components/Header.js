import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='img'>
       <img src='https://i.pinimg.com/564x/79/85/6f/79856f847d55891d2eaeda82bcd06902.jpg' style={{width:'70px',padding:'15px',marginLeft:'27px',borderRadius:'26px'}}/>
      </div>
       <h2 className='name'>Alexander Watson</h2>
       <h4 className='post'>Student</h4>
        <button className='btn'>Edit Account</button>
       </div>
       


  )
}

export default Header
