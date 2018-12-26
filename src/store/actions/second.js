import * as actionTypes from "../actionKeys/actionTypes";

const networkHelper = val => {
    return {
      type: actionTypes.FETCHDATA,
      fetchResult: val
    };
};

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await res.json()
            dispatch(networkHelper(data))
        } catch (error) {
            dispatch(networkHelper([]));
            console.error(error);
        }
    };
};

// export const fetchData = () => {
//     return dispatch => {
//       fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>res.json())
//         .then((data) => {
//             console.log(data)
//           dispatch(networkHelper(data));
//         })
//         .catch(error => {
//           dispatch(networkHelper([]));
//           console.error(error);
//         });
//     };
// };