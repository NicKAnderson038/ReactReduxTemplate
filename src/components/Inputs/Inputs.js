import React, { Component } from 'react'
import Input from '../UI/Input/Input'

class Inputs extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
            <Input inputtype="input" type="text"/>
            <Input inputtype="textarea" type="textarea"/>
        </form>
      </React.Fragment>
        
    )
  }
}

export default Inputs