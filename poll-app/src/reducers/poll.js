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
    }),
    ...pender({
      type: "DELETE_POLL",
      onSuccess: (state, action) => {
        let targetId = action.payload.config.url.split("/").pop();
        return {
          polls: state.polls.filter(poll => poll.id !== parseInt(targetId))
        };
      }
    }),
    ...pender({
      type: "CREATE_POLL",
      onSuccess: (state, action) => {
        return {
          polls: [...state, action.data]
        };
      }
    })
  },
  initialState
);
