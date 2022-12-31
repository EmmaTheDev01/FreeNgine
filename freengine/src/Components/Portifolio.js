import React from 'react'
import '../App.css'
import Starz from '../Components/5.jpg'
import Prodi from '../Components/4.jpg'
import cpjsp from '../Components/3.png'
function Portifolio() {

  return (
    <div className='portifolio'>
      <h1 className='portifolio-title'>Our recent work</h1>
      <div className='cards-space'>

        <div className="work-card">
          <img className='starz' src={Starz} />
          <div className='content'>
            <h3 className='head3'>888starz</h3>
            <p className='para'>Mobile payment functionality on mobile and all networks in Rwanda.</p>
            <a className='url' href='https://888starz.bet' target="_blank">Learn more</a>
          </div>
        </div>

        <div className="work-card">
          <img className='starz' src={cpjsp} />
          <div className='content'>
            <h3 className='head3'>CPJSP</h3>
            <p className='para'>PHP admin panel in which admin performs CRUD operations.</p>
          </div>
        </div>

        <div className="work-card">
          <img className='starz' src={Prodi} />
          <div className='content'>
            <h3 className='head3'>Prodi</h3>
            <p className='para'>Wordpress site with online booking system and administration.</p>
            <a className='url' href='https://prodi.rw' target="_blank">Learn more</a>
          </div>
        </div>

        {/*Styling the services info */}



      </div>
    </div>
  )
}

export default Portifolio