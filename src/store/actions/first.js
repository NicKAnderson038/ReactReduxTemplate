import * as actionTypes from "../actionKeys/actionTypes";

export const add = val => {
    return {
      type: actionTypes.ADD,
      addResult: val
    };
  };
  
  export const subtract = val => {
    return {
      type: actionTypes.SUBTRACT,
      subtractResult: val
    };
  };