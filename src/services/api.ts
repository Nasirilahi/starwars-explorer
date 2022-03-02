import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
    const clientReposne = { ...response };
    // transform response here if needed. 

    return clientReposne;
  };
  
  export const requestAuthInterceptor = async (
    config: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> => {
  
    // handling of token/session management here. 
    return config;
  };
  


const API_AXIOS = (
    baseURL = process.env.API_ENDPOINT || 'https://swapi.dev/api/',
    data = {}
  ): AxiosInstance => {
    if (process.env.NODE_ENV === 'test') return axios;
    const instance = axios.create({ baseURL });
  
    // instance.interceptors.request.use((config: AxiosRequestConfig) => {
    //   let configParam = { ...instance.defaults, ...config };
  
    //   if (Object.keys(data).length > 0) {
    //     // in case we sent some data not from the http method we want to add it here
    //     configParam = { ...configParam, data };
    //   }
  
    //   return requestAuthInterceptor(configParam);
    // });
  
    // instance.interceptors.response.use(responseInterceptor);
  
    return instance;
  };
  
  export default API_AXIOS;