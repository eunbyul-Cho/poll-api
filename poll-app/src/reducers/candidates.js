import { handleActions } from "redux-actions";

import { pender } from "redux-pender";

const initialState = {
  candidates: []
};

export default handleActions(
  {
    ...pender({
      type: "GET_CANDIDATES",
      onSuccess: (state, action) => {
        return {
          candidates: action.payload.data.candidates
        };
      }
    }),
    //////TODO....
    ...pender({
      type: "VOTE",
      onSuccess: (state, action) => {
        return {
          candidates: action.payload.data.candidates
        };
      }
    })
  },

  initialState
);
