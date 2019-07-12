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
export function pollsFetchData() {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    api
      .getPolls()
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.data)
      .then(polls => dispatch(itemsFetchDataSuccess(polls)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
export function myPollsFetchData() {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    api
      .getMyPoll()
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.data)
      .then(polls => dispatch(itemsFetchDataSuccess(polls)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
