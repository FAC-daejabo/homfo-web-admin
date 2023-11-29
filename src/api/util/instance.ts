import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://prod-server.homfo.co.kr/api",
};

const instance = axios.create(axiosConfig);

export default instance;
