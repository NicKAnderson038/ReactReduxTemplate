import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/* Import Reducers */
import firstReducer from "./reducers/first";
import secondReducer from "./reducers/second";
import dateTimeReducer from './reducers/dateTime'

const rootReducer = combineReducers({
      firstReducer,
      secondReducer,
      dateTimeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;