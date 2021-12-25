import axios from 'axios';

const APIConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  // timeout: 20000,
  // validateStatus: (status) => status >= 200 && status <= 400,
  maxRedirects: 0,
};

export const Endpoints = {
  posts: {
    url: '/posts',
    method: 'GET',
    params: {
      test: 'test',
    },
  },

  comments: {
    url: '/comments',
    method: 'GET',
  },
};

const instance = axios.create(APIConfig);

export const Request = (name, options) =>
  instance({
    ...Endpoints[name],
    ...options,
  });
