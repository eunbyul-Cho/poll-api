import { combineReducers } from "redux";
import { polls, itemsHasErrored, itemsIsLoading, candidates } from "./polls";

export default combineReducers({
  polls,
  itemsHasErrored,
  itemsIsLoading,
  candidates
});
