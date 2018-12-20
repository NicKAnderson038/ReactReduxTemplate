import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";
import initialState from './initialState/initialState'

// const initialState = {
//   count: 0
// };

const calc = (s) => {
    const num = s.count
    return num
}

const add = (state, action) => {
  const updatedState = {
    count: action.addResult + calc(state)
  };
  return updateObject(state, updatedState);
};

const subtract = (state, action) => {
    const updatedState = {
      count: calc(state) - action.subtractResult
    };
    return updateObject(state, updatedState);
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD:
        return add(state, action);
      case actionTypes.SUBTRACT:
        return subtract(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;