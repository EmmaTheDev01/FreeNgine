import React,{useState} from 'react'
import {Offcanvas }from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
import '../App.css'
function Bar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
        <p className='bars' onClick={handleShow}>
        <FaBars/>
      </p>

      <Offcanvas show={show} onHide={handleClose} placement="end" className='canvas-body'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='list-section'>
            <li className='menu-items'>Home</li>
            <li className='menu-items'>About us</li>
            <li className='menu-items'>Our Work</li>
            <li className='menu-items'>Contact us</li>

        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Bar