import React,{useState} from 'react'
import {Offcanvas }from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
import '../App.css'
import { Link } from 'react-router-dom';
function Bar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
   
    <div>
        <p className='bars' onClick={handleShow}>
        <FaBars/>
      </p>

      <Offcanvas className="text-bg-dark"  show={show} onHide={handleClose} placement="end"  variant="dark">
        <Offcanvas.Header className='btn-close-white ' closeButton>
          <Offcanvas.Title className='offcanvas-title' ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='list-section'>
           <Link to="/" className='link'> <li className='menu-items'>Home</li></Link>
           <Link to="/about" className='link'> <li className='menu-items'>About us</li></Link>
           <Link to="/services" className='link'><li className='menu-items'>Services</li></Link>
            <Link to="/work" className='link'><li className='menu-items'>Our Work</li></Link>
            <Link to="/contact" className='link'><li className='menu-items'>Contact us</li></Link>

        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  
  )
}

export default Bar