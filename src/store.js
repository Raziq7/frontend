import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import {
  AddressShowReducer,
  ChangeAddrssReducer,
  ChangePasswordReducer,
  loginReducer,
  userRegsterReducer,
} from "./reducer/userReducer";

const appReducer = combineReducers({
  userRegster: userRegsterReducer,
  login: loginReducer,
  AddressShow: AddressShowReducer,
  ChangePassword: ChangePasswordReducer,
  ChangeAddrss: ChangeAddrssReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Middleware = [thunk];

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...Middleware))
);
export default store;
