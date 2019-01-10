import * as actionTypes from "../actionKeys/actionTypes";

export const getDateTime = val => {
    return {
      type: actionTypes.GET_DATE_TIME,
      getDateTimeResult: val
    };
};
  
