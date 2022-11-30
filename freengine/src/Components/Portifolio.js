import React from 'react'
import '../App.css'
function Portifolio() {
 
  return (
    <div className='portifolio'>
     <h1 className='portifolio-title'>Our recent work</h1>
    <div className='cards-space'>
   
        <div className="work-card">
          <h3>888Starz</h3>
          <p>System testing and payment intergration using mobile payments.</p>
        </div>

        <div className="work-card">
          <h3>CPJSP</h3>
          <p>School admin panel made in PHP and MySQL</p>
        </div>

        <div className="work-card">
          <h3>Prodi</h3>
          <p>Wordpress site with online booking system and administration.</p>
        </div>

        {/*Styling the services info */}

      
      
        </div>
    </div>
  )
}

export default Portifolio