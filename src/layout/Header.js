import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='header' fixed-top='true'>
      <img src={logo} className='logo'/>
    </div>
  )
}

export default Header