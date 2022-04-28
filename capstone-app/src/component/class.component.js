import React, { Component } from 'react'
import Button from './button'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
          <h2>This Is a Class Component</h2>
          <Button props={"class button"}/>
      </div>
    )
  }
}

