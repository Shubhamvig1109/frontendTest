
import axios from 'axios'

const axiosClient = axios.create({
    // baseURL: 'http://localhost:8000/v1/',
    baseURL: 'http://43.205.146.227:8000/v1/',
    headers: {
        "Content-Type": "application/json",
    },
});

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient