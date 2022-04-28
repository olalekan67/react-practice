import React from 'react'
import './card.css'

export default function Card({props}) {
  return (
    <div className='card' >
        <h2 className='card main'>{ props }</h2>
    </div>
  )
}
