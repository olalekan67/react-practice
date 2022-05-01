import React from 'react'
import './card.css'

function Card({names}) {

  return (
      <div>
          {
              names&&names.map((name) => 
                    <div className='card1-container'>
                        
                        <div className='card1-div'>
                            <div className='time-image-div'>
                            <h1>{name.time}</h1>
                                <div className='card1-img-div'>
                                    <img src={name.image} className='card1-img' alt=''/>
                                </div>
                            </div>
                            <div className='day-div'>
                                <h4 className='mon'>Mon - Thurs: {name.mon}</h4>
                                <hr />
                                <h4 className='fri'>Fri: {name.fri}</h4>
                                <hr />
                                <h4 className='sat'>Sat: {name.sat}</h4>
                                <hr />
                                <h4 className='sun'>Sun: All Day</h4>

                            </div>
                        </div>
                    </div>
              )
          }
      </div>
    
  )
}

export default Card