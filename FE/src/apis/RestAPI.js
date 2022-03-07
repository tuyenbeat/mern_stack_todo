import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../constants';
import { createBrowserHistory } from "history";

const RestAPI = axios.create({
	baseURL: BASE_URL,
});
RestAPI.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken")
    config.headers.Authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

RestAPI.interceptors.response.use(function (response) {
    if(response.data.message ==="token expires") {
        localStorage.setItem("accessToken", '')
        toast.error("token đã hết hạn")
    }
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default RestAPI;
