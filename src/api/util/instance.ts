import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://dev-server.homfo.co.kr/api",
};

const instance = axios.create(axiosConfig);

export default instance;
