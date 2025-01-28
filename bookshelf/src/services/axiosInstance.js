import axios from 'axios';

const processENV = import.meta.env.VITE_BASE_URL
console.log("processENV--->",processENV);

const axiosInstance = axios.create({
    baseURL: processENV,
    headers: { 'Content-Type': 'application/json' }
});


axiosInstance.interceptors.request.use(
    (config) => {
        console.log("request was sent",config);
        return config;
    },
    (error) => {
        console.log("request  senting error",config);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("recive the response ",response);
        return response;
    },
    (error) => {
        console.log("recive the response", error);
        
        return Promise.reject(error);
    }
);

export default axiosInstance;