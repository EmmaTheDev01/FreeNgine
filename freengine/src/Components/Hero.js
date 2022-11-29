import React from 'react'
import '../App.css'
import Profile from '../3.png'
import {FaInstagram, FaLinkedin, FaDiscord, FaTelegram, FaHtml5,FaCss3Alt, FaAndroid, FaReact, FaJsSquare} from 'react-icons/fa'

function Hero() {
  return (
    <div className='hero'>
        <div className='left'>
            <h1 className='heading'>Free<span className='header-hero'>ngine</span> </h1>
            <h2 className='subheading'>Professional <span className='header-hero'>software</span> developers</h2>
            <p className='paragraph'>Have you thought of elevating your business sitting at home and it work for you? FreeNgine has the best offer, we develop websites, mobile applications and web apps alongside e-commerce systems.</p>
            <button className='hero-button'>Work with us</button>
            <div className='below-section'>
            <div className='social'>
            <p className='head'>Find us :</p>
            <span className='icon ig'><FaInstagram/></span>
            <span className='icon in'><FaLinkedin/></span>
            <span className='icon di'><FaDiscord/></span>
            <span className='icon te'><FaTelegram /></span>
            </div>
            <div className='skills'>
            <p className='head'>Skills :</p>
            <span className='icon ht'><FaHtml5 /></span>
            <span className='icon cs'><FaCss3Alt/></span>
            <span className='icon js'><FaJsSquare/></span>
            <span className='icon re'><FaReact/></span>
            <span className='icon an'><FaAndroid/></span>
           
            </div>
            </div>
            
        </div>
        <div className='right'>
        <div className='box'>
           <div className='image-box'><img className='image' src= {Profile} /></div> 
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default Hero