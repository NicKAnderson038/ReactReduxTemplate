import React from 'react'
import * as classes from './PickupCardDetails.module.css'

const pickupCardDetails = props => {
    console.log('test', props)
  return (
    <div className={classes.DetailWrapper}>
      <p>Show All</p>
      <p>{props.showToggle}</p>
    </div>
  )
}

export default pickupCardDetails

