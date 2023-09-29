import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://dev.ajou-only-five.shop/api",
};

const instance = axios.create(axiosConfig);

export default instance;
