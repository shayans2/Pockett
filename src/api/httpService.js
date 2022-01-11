import axios from 'axios';
import { authService } from './authService';
import { endpoints } from './endpoints';
import { compile } from 'path-to-regexp';

const APIConfig = {
  baseURL: 'https://pockett.bamdad.dev/api',
};

const makeUrlParams = (url, options) => {
  if (options && 'urlParams' in options) {
    const toPath = compile(url);
    const output = toPath({ ...options.urlParams });
    return output;
  } else {
    return url;
  }
};

const instance = axios.create(APIConfig);

export const Request = (name, options) => {
  return instance({
    ...endpoints[name],
    url: makeUrlParams(endpoints[name].url, options),
    ...endpoints[name].options,
    ...options,
    headers: { Authorization: authService.getJwt(), ...options.headers },
  });
};
