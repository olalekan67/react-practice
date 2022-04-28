import React from 'react'
import Card from '../card/card'
import './body.css'

export default function Body() {
  return (
    <div>
        <h1 className='main-h1'>Welcome to Renew website</h1>
        <Card props={"hello how are you doing"} />
        <Card props={"hey there i am new to react"} />
    </div>
  )
}
