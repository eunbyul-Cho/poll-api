import { combineReducers } from "redux";
import { itemsHasErrored, itemsIsLoading } from "./polls";
import polls from "./pender";
import candidates from "./candidates";
import { penderReducer } from "redux-pender";
export default combineReducers({
  polls,
  candidates,
  pender: penderReducer
});
