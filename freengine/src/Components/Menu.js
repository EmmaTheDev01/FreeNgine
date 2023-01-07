import React from 'react'

import Bar from './Bar';
import Logo from '../Components/2.png'
import { Link } from 'react-router-dom';
import '../App.css'
function Menu() {

    
  return (
  
   <div className='navbar'>
   <ul className='nav-container'>
    <Link to="/FreeNgine" className='link'>
    <li className='logo'><img src={Logo} alt="logo" height="80px"/></li>
    </Link>
    <li className='bar-button'><Bar/></li>
    <Link to="/contact" className='link'>
    <li className='list'>Contact Us</li>
    </Link>
    <Link to="/work" className='link'>
    <li className='list'>Our work</li>
    </Link>
    <Link to="/services" className='link'>
    <li className='list'>Services</li>
    </Link>
    <Link to="/about" className='link'>
    <li className='list'>About us</li>
    </Link>

   </ul>
   </div>
  )
}

export default Menu