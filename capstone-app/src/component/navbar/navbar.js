import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar() {
  return (
    <div className='nav-div'>
        <h2 className='nav-logo'>Renew</h2>
        <ul className='nav-ul'>
            <li className='nav-li'><Link to={'/'} className='nav-link'>Home</Link></li>
            {/* <li className='nav-li'><Link to={'/contact'} className='nav-link'>Contact Us</Link></li> */}
            <li className='nav-li'><Link to={'/about'} className='nav-link'>About</Link></li>
            <li className='nav-li'><Link to={'/product'} className='nav-link'>Product</Link></li>
        </ul>
    </div>
  )
}
