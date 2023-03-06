import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  return (
    <div className='nav'>
      <hr/>
      <a href='#' className='prof'>Profile</a>
    <ul className='nav-menu'>
    <li className='nav-item'><a to='/dashboard' className='nav-link'>Dashboard</a></li>
    <li className='nav-item'><a to='/courses' className='nav-link'>Courses</a></li>
    <li className='nav-item'><a to='/discussions' className='nav-link'>Discussions</a></li>
    </ul>
    </div>
  )
}

export default Navbar
