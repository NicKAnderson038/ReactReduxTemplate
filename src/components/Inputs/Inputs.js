import React, { Component } from 'react'
import Input from '../UI/Input/Input'

class Inputs extends Component {
  render() {
    return (
      <React.Fragment>
        <Input inputType="input" type="text"/>
        <Input inputType="textarea" type="textarea"/>
      </React.Fragment>
        
    )
  }
}

export default Inputs