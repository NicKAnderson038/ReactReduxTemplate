import React, { Component } from 'react'
import classes from "./List.module.css"

class List extends Component {
  render() {
    return (
      <React.Fragment>
        <button className={classes.btn}>Get List</button>
      </React.Fragment>
    )
  }
}

export default List