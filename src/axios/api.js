import axios from 'axios';
import { baseUrlHost , imgUrl } from '@/config/env';
import { resolve } from 'url';


axios.defaults.baseURL = baseUrlHost + '/finsuit';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000;


//请求拦截器
axios.interceptors.request.use(
    config => {
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export function post(url,params){
    console.log(axios.defaults.baseURL)
    return new Promise((resolve,reject) => {
        axios.post(url,params).then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })
}



