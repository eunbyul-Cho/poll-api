import api from "../lib/api.js";

export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}
export function itemsFetchDataSuccess(polls) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    polls
  };
}
export function itemsFetchData() {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    api
      .getPolls()
      .then(response => {
        if (response.statusText !== "OK") {
          console.log("errr");
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        console.log(response);
        return response;
      })
      .then(response => response.data)
      .then(polls => dispatch(itemsFetchDataSuccess(polls)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
