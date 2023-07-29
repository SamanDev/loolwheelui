import axios from "axios";
import authHeader from "./auth-header";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://wso.loole.money/"
    : "https://wso.loole.money/";
const getPublicContent = () => {
  return axios.get(API_URL + "api/all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "api/user", { headers: authHeader() });
};
const getchips = (id) => {
  return axios.post("https://loole.money/api/req/addPointToUser", {
    headers: authHeader(),
  });
};
const gettokens = (id) => {
  return axios.get(API_URL + "gettokens?id=" + id, {
    headers: authHeader(),
  });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "api/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "api/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getchips,
  gettokens,
};
