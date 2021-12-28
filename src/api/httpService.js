import axios from 'axios';
import { authService } from './authService';
import { endpoints } from './endpoints';

const APIConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  // timeout: 20000,
  // validateStatus: (status) => status >= 200 && status <= 400,
  maxRedirects: 0,
  headers: { 'x-auth-token': authService.getJwt() },
};

const instance = axios.create(APIConfig);

export const Request = (name, options) =>
  instance({
    ...endpoints[name],
    ...options,
  });
