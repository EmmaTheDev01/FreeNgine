import React from 'react'
import '../App.css';
import { FaChartLine, FaCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa'
function Cards() {
  return (
    <div className='services-section'>
      <div className='card-section'>
        <h1 className='services-header'>Our Awesome services</h1>
        <p className='sub-header'>Check out some of our core services that we have for you</p>

        <div className='cards'>
          <div className='box-service'>
            <span className='icon-service'><FaCode /></span>
            <h4 className='title-service'>Web development</h4>
            <p className='description-card'>We develop modern websites which adopts modern technology and multi purpose functionality</p>
          </div>

          <div className='box-service'>
            <span className='icon-service'><FaChartLine /></span>
            <h4 className='title-service'>Digital marketing</h4>
            <p className='description-card'>Your business needs a boost and you need to increase engagement of people through SEO or social medias.</p>
          </div>


          <div className='box-service'>
            <span className='icon-service'><FaMobileAlt /></span>
            <h4 className='title-service'>App development</h4>
            <p className='description-card'>A mobile app is a special and affordable tool you need to mobilise your data and info, so get one for business purposes.</p>
          </div>


          <div className='box-service'>
            <span className='icon-service'><FaShoppingCart /></span>
            <h4 className='title-service'>Ecommerce</h4>
            <p className='description-card'>In modern technology, virtual stores are profitably increasing and creating hope for entrepreneurs.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards