import React, { useRef } from 'react';
import './pages.css'
import { FaCity, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xczguke', 'template_vpo0xb5', form.current, 'gm4GNx0WIJRq3ZvK-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
        <div className='cont-form'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input type="text" className='contact-input' name="user_name" id='fname' placeholder='Enter your firstname'></input>
          <input type="text" className='contact-input' name='user_name2' placeholder='Enter your last name'></input>
          <input type='email' className='contact-input' name="user_email" placeholder='Enter your E-mail'></input>
          <input type='text' className='contact-input' name='user_phone' placeholder='Enter your phone'></input>
          <input type='textarea' className='message-input' name='message' placeholder='Enter message'></input>
          <input type='submit' onClick={() => alert('Message sent')} className='contact-btn' value='Send Message'></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact