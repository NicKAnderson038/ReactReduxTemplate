import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";
import initialState from './initialState/initialState'

const getDateTime = (state, action) => {
    
    const updatedState = {
      dateTimes: action.getDateTimeResult
    };
    return updateObject(state, updatedState);
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_DATE_TIME:
        return getDateTime(state, action);
      default:
        return state;
    }
};
  
export default reducer;