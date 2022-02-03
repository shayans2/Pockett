import { AxiosRequestConfig } from 'axios';

const baseURL = 'https://pockett.bamdad.dev/api';

export const creator = (API: AxiosRequestConfig) => {
  API.baseURL = baseURL;
  return API;
};

export const endpoints = {
  login: creator({
    url: '/user/login',
    method: 'POST',
    transformRequest: (data) => JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }),
  register: creator({
    url: '/user/register',
    method: 'POST',
    transformRequest: (data) => JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }),
  addTransaction: creator({
    url: '/transaction/',
    method: 'POST',
    transformRequest: (data) => JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }),
  getTransactions: creator({
    url: '/transaction/:id',
    method: 'GET',
  }),
};
