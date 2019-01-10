import React from 'react'
import PickupCardDetails from './PickupCardDetails/PickupCardDetails'

const pickupCardTime = props => {
    let newProps = null
    const data = props.deliveryTimes.map((d,i)=>{
        return(
                 <button key={`buttonKey-${i}`}>{d.pickupTime}</button>
        )
    })

    const onToggle = (bool) =>{
        if(newProps){
            newProps = false
        }else{
           newProps = bool
        }
        return newProps
    }

    

  return (
    <div>
      {data}
      <button onClick={()=> onToggle(true)}>
        <PickupCardDetails showDetail={props} showToggle={newProps}/>
        </button>
    </div>
  )
}

export default pickupCardTime
