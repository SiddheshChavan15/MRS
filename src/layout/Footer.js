import React from 'react'
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle
} from 'react-icons/ai'
const Footer = () => {
  return (

    
      
      <div
        fluid
        tag="footer"
        className="sticky-bottom footer text-uppercase"
        >
        
        <AiFillLinkedin className='social_icon' />
        <AiFillInstagram className='social_icon' />
        <AiFillGithub className='social_icon' />
        <AiFillTwitterCircle className='social_icon' />
        <AiFillRedditCircle className='social_icon' />
         
        
        <span className='footer_text float-end'>&copy; 2020 - All Rights Reserved</span>
        
        </div>
    
    

  )
}

export default Footer