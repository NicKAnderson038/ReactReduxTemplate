import React, { Component } from 'react'
import classes from './Counter.module.css'
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreators";



class Counter extends Component {


  render() {

    const count = this.props.count
    return (
      <div className={classes.btnflex}>
        <button className={classes.btn} onClick={() => this.props.onAdd(1)}>Add</button>
        <button className={classes.btn} onClick={() => this.props.onSubtract(1)}>Subtract</button>
        <div>
          <h2 className={classes.number}>{count}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.firstReducer.count
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
)(Counter);