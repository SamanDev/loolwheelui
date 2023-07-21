import axios from "axios";
import authHeader from "./auth-header";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://wso.loole.money/lastlist"
    : "https://wso.loole.money/lastlist";

const getPublicContent = (data) => {
  return axios.get(API_URL + "?l=" + data.command);
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
