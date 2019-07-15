import api from "../lib/api.js";
import { createAction, handleActions } from "redux-actions";
import { pender, applyPenders } from "redux-pender";

export const getPolls = createAction("GET_POLLS", api.getPolls);
export const getMyPolls = createAction("GET_MY_POLLS", api.getMyPoll);

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

export function pollsFetchDataSuccess(polls) {
  return {
    type: "POLLS_FETCH_DATA_SUCCESS",
    polls
  };
}
export function addPoll(poll) {
  return {
    type: "CREATE_POLL",
    poll
  };
}
export function deltePoll(id) {
  return {
    type: "DELETE_POLL",
    id
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
      .then(polls => dispatch(pollsFetchDataSuccess(polls)))
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
      .then(polls => dispatch(pollsFetchDataSuccess(polls)))
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
        return response.data.candidates;
      })
      .then(candidates => dispatch(candidatesFetchDataSuccess(candidates)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function voteData(targetId) {
  return dispatch => {
    api
      .vote(targetId)
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => {
        return response.data;
      })

      .then(candidates => dispatch(candidatesFetchDataSuccess(candidates)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function createPoll(request) {
  return dispatch => {
    api
      .createPoll(request)
      .then(response => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => {
        return response.data;
      })

      .then(poll => dispatch(addPoll(poll)))
      .catch(() => {
        dispatch(itemsHasErrored(true));
      });
  };
}

export function deletePollData(pollId) {
  return dispatch => {
    api
      .deletePoll(pollId)
      .then(response => {
        if (response.status !== 204) {
          throw Error(response.status);
        }
        let deletedId = response.config.url.split("/").pop();

        return deletedId;
      })
      .then(deletedId => {
        return parseInt(deletedId);
      })

      .then(id => dispatch(deltePoll(id)))
      .catch(() => {
        dispatch(itemsHasErrored(true));
      });
  };
}
