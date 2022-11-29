import React from 'react'
import { useState } from 'react';
import Bar from './Bar';
import '../App.css'
function Menu() {

    
  return (
  
   <div className='navbar'>
   <ul className='nav-container'>
    <li className='logo'>Free<span className="logoright">ngine</span></li>
    <li className='bar-button'><Bar/></li>
    <li className='list'>Contact Us</li>
    <li className='list'>Our work</li>
    <li className='list'>About us</li>
    <li className='list'>Home</li>
   </ul>
   </div>
  )
}

export default Menu