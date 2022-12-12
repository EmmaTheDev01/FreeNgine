import React from 'react'
import '../App.css'
import {FaInstagram, FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Bottom() {
  return (
    <div className='bottom'>
    <div className='bottom-content'>
        <div className='bottom-left'>
            <h1 className='bottom-title'>About us</h1>
            <div className='bottom-nav'>
                <p>Freengine is a software development limited company which was found in October 2022, leading the way in development of online businesses.
                </p>
            </div>
        </div>
        <div className='bottom-middle'>
          <h1 className='bottom-title'>Important links</h1>
          <div className='bottom-nav'>
                <ul className='bottom-links'>
                  <Link to="/" className='link-menu' ><li >Home</li></Link>
                  <Link to='/about' className='link-menu'><li >About us</li></Link>
                  <Link to="/services" className='link-menu'><li>Servises</li></Link>
                  <Link to="/work" className='link-menu'><li>Our Work</li></Link>
                  <Link to="/contact" className='link-menu'><li>Contact us</li></Link>
                </ul>
            </div>
        </div>
        <div className='bottom-right'>
          <h1 className='bottom-title'>More Information</h1>
          <div className='bottom-nav'>
                <ul className='bottom-links'>
                  <li className='link-menu'>Learn more</li>
                  <li className='link-menu'>WOF Inc</li>
                  <li className='link-menu'>Isange digital</li>
                  <li className='link-menu'>Inventory</li>
                </ul>
            </div>
        </div>
        </div>
        <div className='socials'>
          <h1 className='icons-title'>Find us on:</h1>
          <span className='icon-bottom ig'><FaInstagram/></span>
          <span className='icon-bottom in'><FaLinkedin/></span>
          <span className='icon-bottom di'><FaDiscord/></span>
          <span className='icon-bottom te'><FaTelegram/></span>
          <span className='icon-bottom git'><FaGithub/></span>
          <span className='icon-bottom face'><FaFacebook/></span>
        </div>
    </div>
    
  )
}

export default Bottom