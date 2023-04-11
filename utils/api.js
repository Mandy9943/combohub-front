import baseApiUrl from "./baseApiUrl";

//axios config
const axios = require("axios");
export const axiosInstance = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
