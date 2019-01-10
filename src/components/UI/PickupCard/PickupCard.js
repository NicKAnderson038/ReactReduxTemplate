import React from 'react'
import * as classes from './PickupCard.module.css'
import PickupCardTimes from './PickupCardTimes/PickupCardTimes'

const dateTimeCard = props => {
    const data = props.cardValue.map((d,i) => {
        return (
            <div key={`subkey-${i}`} className={classes.Main}>
                <div className={classes.Card}>
                    <h6>{d.location}</h6>
                    <h6>${d.amount.toFixed(2)}</h6>
                </div >
                    <div className={classes.Card}>
                    <h6>{d.companyName}</h6>
                    </div>
                <div className={classes.Card}>
                    <h6>{d.deliveryPerDay}</h6>
                </div>
                <div className={classes.Buttons}>
                    <PickupCardTimes deliveryTimes={d.deliveries}/>
                   
                </div>
               
            </div>
        )
    })

  return (
    <div className={classes.Wrapper}>
      {data}
    </div>
  )
}


export default dateTimeCard