import React from 'react'
import { FaEye, FaLightbulb } from 'react-icons/fa'
import './pages.css'
import Image from '../1.png'
function About() {
  return (
    <div className='about'>
      <div className='about-page'>
        <div className="about-content">
        <div className="about-photo">
            {/*About image on site */}
            {/* <img className='about-image' src={Image} /> */}
          </div>
          <div className='about-text'>
            <h1 className="about-header">About us</h1>
            <p className="company-des">Freengine is a software development team which organised itself in January 2022 and is basically working on bigger projects in 12 months. We work under the two companies which are limited by shares and operate as software developers under their regulations. Those companies are WOF Inc and Isange digital.</p>
          </div>
          

        </div>

        <div className="mv-section">
          <div className="mission">
            <span className="icon-about"><FaLightbulb /></span>
            <h2 className="mission-header">Our mission</h2>
            <p className="mission-body">Our mission is to help businesses adopt digital service providing strategies and to fill technology gaps in Africa</p>
          </div>
          <div className="vision">
            <span className="icon-about"><FaEye /></span>
            <h2 className="vision-header">Our Vision</h2>
            <p className="vision-body">We have a vision to become the best and cutting edge Tech experts and computed software developers in East Africa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About