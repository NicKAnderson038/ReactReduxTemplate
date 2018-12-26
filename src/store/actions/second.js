import * as actionTypes from "../actionKeys/actionTypes";


  
// export const fetchData = val => {
//     return {
//       type: actionTypes.FETCHDATA,
//       subtractResult: val
//     };
// };

const networkHelper = val => {
    return {
      type: actionTypes.FETCHDATA,
      fetchResult: val
    };
};

export const fetchData = () => {
    return dispatch => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data) => {
            console.log(data)
          dispatch(networkHelper(data));
        })
        .catch(error => {
          dispatch(networkHelper([]));
          console.error(error);
        });
    };
  };