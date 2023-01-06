import React from 'react'
import '../App.css'
import { FaInstagram, FaLinkedin, FaDiscord, FaTelegram, FaGithub, FaFacebook } from 'react-icons/fa';
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
              <Link to="/services" className='link-menu'><li>Services</li></Link>
              <Link to="/work" className='link-menu'><li>Our Work</li></Link>
              <Link to="/contact" className='link-menu'><li>Contact us</li></Link>
            </ul>
          </div>
        </div>
        <div className='bottom-right'>
          <h1 className='bottom-title'>More Information</h1>
          <div className='bottom-nav'>
            <ul className='bottom-links'>
            <a className='refer' href='https://instagram.com/wofonline' target="_blank"><li className='link-menu'>Learn more</li></a>
              <a  className='refer' href='https://wofbusiness.company.site' target="_blank"><li className='link-menu'>WOF Inc</li></a>
              <li className='link-menu'>Our blog</li>
              <a  className='refer' href='https://isangedigital.com' target="_blank"><li className='link-menu'>Isange digital</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className='socials'>
        <h1 className='icons-title'>Find us on:</h1>
        <a href='https://instagram.com/wofonline' target="_blank"> <span className='icon-bottom ig'><FaInstagram /></span></a>
        <a href='https://www.linkedin.com/in/emma-habumugisha-133a231b9/' target="_blank"><span className='icon-bottom in'><FaLinkedin /></span></a>
        <a href='https://discord.com/channels/@me' target="_blank"><span className='icon-bottom di'><FaDiscord /></span></a>
        <a href='t.me/Xgizxca' target="_blank"><span className='icon-bottom te'><FaTelegram /></span></a>
        <a href='https://github.com/EmmaTheDev01' target="_blank"><span className='icon-bottom git'><FaGithub /></span></a>
        <a href='https://facebook.com/wofonline' target="_blank"><span className='icon-bottom face'><FaFacebook /></span></a>
      </div>
    </div>

  )
}

export default Bottom