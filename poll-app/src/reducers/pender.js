import { handleActions } from "redux-actions";

import { pender } from "redux-pender";

const initialState = {
  polls: []
};

export default handleActions(
  {
    ...pender({
      type: "GET_POLLS",
      onSuccess: (state, action) => {
        return {
          polls: action.payload.data
        };
      }
    }),
    ...pender({
      type: "GET_MY_POLLS",
      onSuccess: (state, action) => {
        return {
          polls: action.payload.data
        };
      }
    })
  },
  initialState
);
