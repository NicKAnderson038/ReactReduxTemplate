import React, { Component } from 'react'
import PickupCardDetails from './PickupCardDetails/PickupCardDetails'
class PickupCardTime extends Component {
    state = {
        toggle: false
    }

render(){
   
    const data = this.props.deliveryTimes.map((d,i)=>{
        return(
                 <button key={`buttonKey-${i}`}>{d.pickupTime}</button>
        )
    })

    const onToggle = (e) =>{
        console.log('NEWPROPS', this.state.toggle)
        let boolSwitch;
        this.state.toggle? boolSwitch = false : boolSwitch = true;
        
        this.setState({
            toggle: boolSwitch
        })
    }

  return (
    <div>
      {data}
      <button onClick={(event)=> onToggle(event)}>Show All</button>
        <PickupCardDetails showDetail={this.props} changed={this.state.toggle}/>
        {/* </button> */}
    </div>
  
      )
    }
}

export default PickupCardTime
