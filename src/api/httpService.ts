import axios, { AxiosRequestConfig } from 'axios';
import { endpoints } from './endpoints';
import { compile } from 'path-to-regexp';
import { authService } from './authService';

interface AxiosReqWithParam extends AxiosRequestConfig {
  urlParams?: { [key: string]: string };
}

const urlToPath = (API: AxiosReqWithParam) => {
  if (API?.url && 'urlParams' in API) {
    const toPath = compile(API.url);
    const url = toPath({ ...API.urlParams });
    return { ...API, url };
  } else {
    return API;
  }
};

const setHeaders = (API: AxiosRequestConfig) => {
  API.headers = { ...API.headers };
  API.headers.Authorization = authService.getJwt() ?? '';
  return API;
};

const configureEndpoint = (API: AxiosReqWithParam) => {
  return setHeaders(urlToPath(API));
};

export const request = (
  name: keyof typeof endpoints,
  options: AxiosReqWithParam,
) => {
  const merged = { ...endpoints[name], ...options };
  const config = configureEndpoint(merged);

  return axios({ ...config });
};
