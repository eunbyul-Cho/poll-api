import { combineReducers } from "redux";
import { itemsHasErrored, itemsIsLoading, candidates } from "./polls";
import polls from "./pender";
import { penderReducer } from "redux-pender";
export default combineReducers({
  polls,

  itemsHasErrored,
  itemsIsLoading,
  candidates,
  pender: penderReducer
});
