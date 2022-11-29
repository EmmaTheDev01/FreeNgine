import React from 'react'
import '../App.css'
function Cards() {
  return (
    <div className='card-section'>
    <h1 className='services-header'>Our Awesome services</h1>
    <p className='sub-header'>Check out some of our core services that we have for you</p>
    
    <div className='cards'>
    <div className='box-service'>
    <div className='icon'></div>
        <h4 className='title-service'>Web development</h4>
        <p className='description'>We develop modern websites which adopts modern technology and multi purpose functionality</p>
    </div>

    <div className='box-service'>
    <div className='icon'></div>
        <h4 className='title-service'>Digital marketing</h4>
        <p className='description'>Your business needs a boost and you need to increase engagement of people through SEO or social medias.</p>
    </div>


    <div className='box-service'>
    <div className='icon'></div>
        <h4 className='title-service'>App development</h4>
        <p className='description'>A mobile app is a special and affordable tool you need to mobilise your data and info, so get one for business purposes.</p>
    </div>


    <div className='box-service'>
    <div className='icon'></div>
        <h4 className='title-service'>Ecommerce</h4>
        <p className='description'>In modern technology, virtual stores are profitably increasing and creating hope.</p>
    </div>
    </div>

    </div>
  )
}

export default Cards