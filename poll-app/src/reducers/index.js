import { combineReducers } from "redux";
import { polls, itemsHasErrored, itemsIsLoading } from "./polls";

export default combineReducers({
  polls,
  itemsHasErrored,
  itemsIsLoading
});
