import axios from 'axios';
import { authService } from './authService';
import { endpoints } from './endpoints';

const APIConfig = {
  baseURL: 'https://pockett.bamdad.dev/api',
  headers: { Authorization: authService.getJwt() },
};

const instance = axios.create(APIConfig);

export const Request = (name, options) =>
  instance({
    ...endpoints[name],
    ...options,
  });
