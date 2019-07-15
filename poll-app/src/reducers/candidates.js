import { handleActions } from "redux-actions";

import { pender } from "redux-pender";

const initialState = {
  candidates: []
};

export default handleActions(
  {
    ...pender({
      type: "GET_CANDIDATES",
      onPending: (state, action) => {
        return state;
      },
      onSuccess: (state, action) => {
        return {
          candidates: action.payload.data.candidates
        };
      }
    }),

    ...pender({
      type: "VOTE",
      onSuccess: (state, action) => {
        return {
          state
        };
      }
    })
  },

  initialState
);
