import axios from "axios";
let token = "Bearer " + localStorage.getItem("jwt");
let aws = "pollEnv.pewgvymnw4.us-west-2.elasticbeanstalk.com";

export default {
  getPolls: () => {
    token = "Bearer " + localStorage.getItem("jwt");
    return axios
      .get("api/polls", { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  },

  getCandidates: targetId =>
    // // props 정보는 id, name만 포함하므로 poll id를 가지고 candidate정보를 불러옴
    axios
      .get(`api/polls/${targetId}`, { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  vote: candidateId =>
    axios
      .put(
        `api/candidates/${candidateId}`,

        { id: candidateId },
        {
          headers: { Authorization: token }
        }
      )
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  createPoll: request =>
    axios
      .post("/api/polls", request, { headers: { Authorization: token } })
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      }),
  deletePoll: pollId =>
    axios
      .delete(`api/polls/${pollId}`, { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  getMyPoll: () =>
    axios
      .get(`/api/mypoll`, { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  login: request =>
    axios
      .post("/auth/login", request)
      .then(response => response.data)
      .catch(error => {
        throw error;
      }),
  signup: request =>
    axios
      .post(
        "http://pollEnv.pewgvymnw4.us-west-2.elasticbeanstalk.com/signup",
        request
      )
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        throw error;
      })
};
