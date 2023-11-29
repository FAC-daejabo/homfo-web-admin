import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../auth/api";
import Swal from "sweetalert2";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://prod-server.homfo.co.kr/api",
};

const instance = axios.create(axiosConfig);

// 요청 인터셉터 추가 : 요청이 전달되기 전에 작업 수행, 요청 오류가 있는 작업 수행을 할 수 있는 2개의 콜백 함수를 받는다.
instance.interceptors.request.use(
  (config) => {
    const accessToken = getToken();

    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = accessToken;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가 : 응답 데이터가 있는 작업 수행, 응답 오류가 있는 작업 수행을 할 수 있는 2개의 콜백 함수를 받는다.
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
