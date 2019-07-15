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
//TODO 하나씩 set 해야 하나???

export function candidatesFetchDataSuccess(candidates) {
  return {
    type: "CANDIDATES_FETCH_DATA_SUCCESS",
    candidates
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

export function candidatesFetchData(targetId) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    api
      .getCandidates(targetId)
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => {
        console.log(response.data);
        return response.data.candidates;
      })
      .then(candidates => dispatch(candidatesFetchDataSuccess(candidates)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function voteData(targetId) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    api
      .vote(targetId)
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })

      .then(candidates => dispatch(candidatesFetchDataSuccess(candidates)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
