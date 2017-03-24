import axios from 'axios';

import { API_Url } from './constant.js';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = API_Url;

axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log('net error');
    return Promise.reject(error);
});

const realApi = (data) => {
  return new Promise((resolve, reject) => {
    axios(data)
      .then(response => {
          resolve(response.data);
      }, err => {
          reject(err);
      })
      .catch((error) => {
          reject(error)
      });
  })
};

export default {
  get(url, data) {
    const realData = Object.assign({
      method: 'GET',
    }, url, data);
    return realApi(realData);
  },
  post(url, data) {
    const realData = Object.assign({
      method: 'POST',
    }, url, data);
    return realApi(realData);
  },
};