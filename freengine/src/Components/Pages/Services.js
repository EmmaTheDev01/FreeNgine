import React, { useState, useEffect } from 'react'
import './pages.css'
import { arrservices, description } from '../../data';
function Services() {
  const [service, setService] = useState("Web Development");
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
                <form>
                  <div className='left-input'>
                    <input className='input' type="text" placeholder="Names" />
                    <input className='input' type="text" value={service} placeholder={service} disabled />
                  </div>
                  <div className='right-input'>
                    <input className='input' type="email" placeholder="Your Email" />
                    <input className='input' type="text" placeholder="Phone" />
                  </div>

                  <input className='btn-sbmt' type="submit" value="Request for a quote" />

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