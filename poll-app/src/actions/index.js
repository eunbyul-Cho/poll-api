import api from "../lib/api.js";
import { createAction } from "redux-actions";

export const getPolls = createAction("GET_POLLS", api.getPolls);
export const getMyPolls = createAction("GET_MY_POLLS", api.getMyPoll);
export const getCandidates = createAction("GET_CANDIDATES", api.getCandidates);
export const vote = createAction("VOTE", api.vote);
export const deletePoll = createAction("DELETE_POLL", api.deletePoll);
export const createPoll = createAction("CREATE_POLL", api.createPoll);
