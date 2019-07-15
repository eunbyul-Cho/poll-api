export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function polls(state = [], action) {
  switch (action.type) {
    case "POLLS_FETCH_DATA_SUCCESS":
      return action.polls;
    case "CREATE_POLL":
      return [...state, action.poll];
    case "DELETE_POLL":
      return state.filter(poll => poll.id !== action.id);
    default:
      return state;
  }
}
export function candidates(state = [], action) {
  switch (action.type) {
    case "CANDIDATES_FETCH_DATA_SUCCESS":
      return action.candidates;
    default:
      return state;
  }
}

export function vote(state = [], action) {
  switch (action.type) {
    case "VOTE":
      return action.vote;
    default:
      return state;
  }
}
