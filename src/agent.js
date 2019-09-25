import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

//TODO CHANGE API ROUTE
const API_ROOT = "http://185.254.190.74/api";

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

const limit = (count, p) => `limit=${count}&skip=${p ? p * count : 0}`;
const Analyzes = {
  //pagination doesn't work properly, you will only see last 50 articles
  all: page => requests.get(`/analyzes?${limit(50, page)}`),
  create: post => requests.post("/analyzes", post),
  one: id => requests.get(`/analyzes/${id}`)
};

const ColorDetector = {
  predict: formData =>
    superagent
      .post("35.240.32.160:5000/api/v1/predict", formData)
      .then(responseBody)
};
export default {
  setToken: _token => {
    token = _token;
  },
  Analyzes,
  ColorDetector
};
