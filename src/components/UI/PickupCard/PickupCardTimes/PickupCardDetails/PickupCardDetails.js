import React from 'react'
import * as classes from './PickupCardDetails.module.css'

const pickupCardDetails = props => {
    console.log('DETAILS', props)
    let display;
    props.changed? display = (<div>My Div</div>): display = null;

  return (
    <div className={classes.DetailWrapper}>
      {/* <p>Show All</p>
      <p>{props.showDetail}</p> */}
      {display}
    </div>
  )
}

export default pickupCardDetails

