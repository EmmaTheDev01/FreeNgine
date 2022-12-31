import React, { useState, useRef } from 'react'
import './pages.css'
import { arrservices, description } from '../../data';
import emailjs from '@emailjs/browser';
function Services() {
  const [service, setService] = useState("Web Development");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xczguke', 'template_g99xt67', form.current, 'gm4GNx0WIJRq3ZvK-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='services'>
      <div className='page-section'>
        <div className='services-page'>
          <div className='set-serv'>
            <span className='breadcrumb' onClick={() => setService('Web development')} >Web develoment</span>
            <span className='breadcrumb' onClick={() => setService('Digital marketing')}>Digital marketing</span>
            <span className='breadcrumb' onClick={() => setService('Mobile App development')}>App development</span>
            <span className='breadcrumb' onClick={() => setService('Ecommerce')}>Ecommerce</span>
          </div>

          <div className='all-services'>

          
            <div className='request'>
              <h2 className='clicked-services'>Request Quote for {service}</h2>
              <p className='sub-head'>Request a quote for your preffered service.</p>
              <div className='form'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='left-input'>
                    <input className='input' name="user_names" type="text" placeholder="Names" />
                    <input className='input' name="service" type="text" value={service} placeholder={service} disabled />
                  </div>
                  <div className='right-input'>
                    <input className='input' name='user_email' type="email" placeholder="Your Email" />
                    <input className='input' name='user_phone' type="text" placeholder="Phone" />
                  </div>

                  <input className='btn-sbmt' type="submit" onClick={() => alert('Your quotation of '+service+ ' has been received!')} value="Request for a quote" />

                </form>
              </div>

            </div>
            <div className='description'>
              <h1 className='title-serv-des'>Our Services</h1>
              {description.map((des, i) =>
                <ul className='list-des'>
                  <li className='des'> {des}</li>
                </ul>
              )}
            </div>


          </div>
        </div>

      </div>



    </div>
  )
}

export default Services