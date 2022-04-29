import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <div className='header-div'>
        <h2 className='header-h2'>
          enjoy our delicious meal
        </h2>
        <p className='header-p'>
          Our restaurant is one of the greatest places to enjoy breakfast, launch, or dinner. Learn more about our menu.
        </p>
      </div>
      <div className='about1-container'>
        <div className='about1-div'>
          <h4 className='about1-h4'>about us</h4>
          <h2 className='about1-h2'>
            welcome to our restaurant
          </h2>
          <p className='about1-p'>
          Protective masks and facial coverings will have to be worn by all staff and guests. Masks are required at all times at the restaurant unless seated at the table.<br/>
          Reservations are strongly recommended since we are only currently operating at a smaller capacity.
          </p>
          <button className='about1-btn'><Link to={'/about'} className='about1-link'>Learn More</Link></button>
        </div>
      </div>
     
    </div>
  )
}

export default Home