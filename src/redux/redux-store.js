import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  login: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;