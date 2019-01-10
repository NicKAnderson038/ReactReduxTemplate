import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreators";
import DateTimeCard from '../UI/PickupCard/PickupCard'

class Pickups extends Component {
  render() {

    const dateTimes = this.props.dateTimes.map((dateTime, i) => {
        return(
        <div key={`key-${i}`}>
            {dateTime.date}
            
            <DateTimeCard cardValue={dateTime.data}/>
        </div>
        )
    })

    return (
      <div>
        {dateTimes}
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
      dateTimes: state.dateTimeReducer.dateTimes
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onAdd: val =>
        dispatch(actionCreators.add(val)),
      onSubtract: val =>
        dispatch(actionCreators.subtract(val))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pickups);