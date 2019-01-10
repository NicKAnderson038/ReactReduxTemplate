import React, { Component } from 'react'
import PickupCardDetails from './PickupCardDetails/PickupCardDetails'
class PickupCardTime extends Component {
    state = {
        toggle: false
    }

render(){
    let newProps = null
    const data = this.props.deliveryTimes.map((d,i)=>{
        return(
                 <button key={`buttonKey-${i}`}>{d.pickupTime}</button>
        )
    })

    const onToggle = (e, bool) =>{
        if(newProps){
            newProps = false
        }else{
           newProps = bool
        }
        // return newProps

        this.setState({
            toggle: newProps
        })
    }

    const bool = {...this.state.toggle}
  return (
    <div>
      {data}
      <button onClick={(event)=> onToggle(event, true)}>
        <PickupCardDetails showDetail={this.props} changed={bool}/>
        </button>
    </div>
  
      )
    }
}

export default PickupCardTime
