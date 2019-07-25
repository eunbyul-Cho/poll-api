import axios from "axios";
let token = "Bearer " + localStorage.getItem("jwt");

let aws = "https://pollEnv.pewgvymnw4.us-west-2.elasticbeanstalk.com";

export default {
  getPolls: () => {
    token = "Bearer " + localStorage.getItem("jwt");

    return axios
      .get(`${aws}/api/polls`, { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  },

  getCandidates: targetId =>
    // // props 정보는 id, name만 포함하므로 poll id를 가지고 candidate정보를 불러옴
    axios
      .get(`${aws}/api/polls/${targetId}`, {
        headers: { Authorization: token }
      })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  vote: candidateId =>
    axios
      .put(
        `${aws}/api/candidates/${candidateId}`,

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
      .post(`${aws}/api/polls`, request, { headers: { Authorization: token } })
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      }),
  deletePoll: pollId =>
    axios
      .delete(`${aws}/api/polls/${pollId}`, {
        headers: { Authorization: token }
      })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  getMyPoll: () =>
    axios
      .get(`${aws}/api/mypoll`, { headers: { Authorization: token } })
      .then(response => response)
      .catch(error => {
        throw error;
      }),
  login: request => {
    let url = `${aws}/auth/login`;
    console.log(url);
    let urlarr = url.split("/");
    urlarr.splice(2, 1);
    console.log(urlarr.join(""));
    return axios
      .post(
        `pollEnv.pewgvymnw4.us-west-2.elasticbeanstalk.com/auth/login`,
        request
      )
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  },
  signup: request =>
    axios
      .post(`${aws}/signup`, request)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        throw error;
      })
};
