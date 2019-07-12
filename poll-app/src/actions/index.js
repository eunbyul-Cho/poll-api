import api from "../lib/api.js";

export const GET_POLLS = "GET_POLLS";

export const getPolls = () => ({
  type: GET_POLLS
});
