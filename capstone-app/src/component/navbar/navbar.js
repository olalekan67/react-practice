import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <div className='nav'>
        <Navbar bg='dark' variant='dark' fixed='top' expand='sm' >
          <Container fluid>
            <Navbar.Brand>
              Alice
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className='ms-auto'>
              <Nav.Item>
                <Nav.Link><Link to={'/'} className='nav-link'>Home</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to={'/product'} className='nav-link'>Product</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link><Link to={'/about'} className='nav-link'>About</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link><Link to={'/contact'} className='nav-link'>Contact</Link></Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          
          </Container>
          
        </Navbar>
    </div>
  )
}

export default NavBar