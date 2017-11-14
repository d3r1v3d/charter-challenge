import { createStore, applyMiddleware } from "redux";
import { queryReducer }                 from "../redux/index";  //grab our reducer/store
import thunkMiddleware                  from "redux-thunk";     //thunk allows us to call functions as our redux action creators

const createStoreWithMiddleware = applyMiddleware(
  
  thunkMiddleware

)(createStore)

export const store = createStoreWithMiddleware(queryReducer)
