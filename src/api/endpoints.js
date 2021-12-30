export const endpoints = {
  login: {
    url: '/user/login',
    method: 'POST',
    options: {
      transformRequest: (data) => JSON.stringify(data),
    },
    headers: { 'Content-Type': 'application/json' },
  },
  register: {
    url: '/user/register',
    method: 'POST',
    options: {
      transformRequest: (data) => JSON.stringify(data),
    },
    headers: { 'Content-Type': 'application/json' },
  },
  addTransaction: {
    url: '/transaction',
    method: 'POST',
    options: {
      transformRequest: (data) => JSON.stringify(data),
    },
    headers: { 'Content-Type': 'application/json' },
  },
  // getTransactions: {
  //   url: '/transaction/',
  //   method: 'GET',
  // },
};
