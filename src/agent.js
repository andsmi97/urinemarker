import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

//TODO CHANGE API ROUTE
const API_ROOT = "https://us-central1-todoapp-82755.cloudfunctions.net/api";

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("authorization", `Bearer ${token}`);
  }
};

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
};

export default {
  setToken: _token => {
    token = _token;
  }
};