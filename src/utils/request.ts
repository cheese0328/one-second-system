/* eslint-disable no-console */
import axios from "axios";
import { message } from "antd";

const request = axios.create({
  // baseURL: "http://192.168.145.28:8888",
  timeout: 5000,
  timeoutErrorMessage: "请求超时，请稍后再试"
});

// 请求拦截器
request.interceptors.request.use((config) => config);

// 响应拦截器
request.interceptors.response.use(async (response) => {
  if (response.data.code === 203) {
    await message.error(response.data.msg);
    window.location.href = "/login";
    return response;
  }
  if (response.data.code !== 200) {
    await message.error(response.data.msg);
  }
  return response;
});

export default request;
