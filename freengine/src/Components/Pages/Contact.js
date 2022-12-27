import React from 'react'
import './pages.css'
import { FaCity, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa'
function Contact() {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-text'>
          <h2 className="Contact-header">Our Contacts</h2>
          <p className="contact-des">Feel free to drop your idea in our contacts form, otherwise below section contains all of our contact details.
            we reach out immediately within 24 hours. We will be happy to hear from you.</p>

          <div className='contact-details'>
            <p><FaCity /> Kigali - Rwanda</p>
            <p><FaEnvelope /> worldoffictionrw@gmail.com</p>
            <p><FaPhoneAlt /> +250784019175</p>
            <p><FaMapMarkerAlt /> KK 18 Ave</p>
          </div>
        </div>
        <div className='contact-form'>
          <input type="text" className='contact-input' name='firstname' id='fname' placeholder='Enter your firstname'></input>
          <input type="text" className='contact-input' placeholder='Enter your last name'></input>
          <input type='email' className='contact-input' placeholder='Enter your E-mail'></input>
          <input type='text' className='contact-input' placeholder='Enter your phone'></input>
          <input type='textarea' className='message-input' placeholder='Enter message'></input>
          <input type='submit' className='contact-btn' value='Send Message'></input>
        </div>
      </div>
    </div>
  )
}

export default Contact