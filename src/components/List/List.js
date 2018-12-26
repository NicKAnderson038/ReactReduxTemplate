import React, { Component } from 'react'
import classes from "./List.module.css"
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreators";

class List extends Component {

  componentDidMount(){
    const node = this.refs.trackerRef;
    node && node.scrollIntoView({block: "start", behavior: 'smooth', inline: "nearest"})
  }
  componentDidUpdate() {
    const node = this.refs.trackerRef;
    node && node.scrollIntoView({block: "start", behavior: 'smooth', inline: "nearest"})
  }
  

  render() {
    const data = this.props.data
    return (
      <React.Fragment>
        <button className={classes.btn} onClick={()=>this.props.onFetchData()} ref="trackerRef">Get List</button>
        {data.map(x => {
        return <h6 key={x.id} id={x.id}>{x.id}. {x.title}</h6>
        })}
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.secondReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: val =>
      dispatch(actionCreators.fetchData(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);