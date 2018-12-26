import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";
import initialState from './initialState/initialState'


const fetchData = (state, action) => {
    console.log(`C% TEST DATA`, 'color:blue;')
    const updatedState = {
      data: action.fetchResult
    };
    return updateObject(state, updatedState);
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCHDATA:
        return fetchData(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;