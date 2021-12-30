import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const setUser = (data) => {
  Cookies.set('token', data.token);
  window.localStorage.setItem('user-info', JSON.stringify(data.user));
};

const logout = () => {
  Cookies.remove('token');
  window.localStorage.removeItem('user-info');
};

const getJwt = () => {
  return Cookies.get('token');
};

const getUser = () => {
  try {
    const jwt = Cookies.get('token');
    const user = window.localStorage.getItem('user-info');
    return {
      jwt: jwtDecode(jwt),
      user,
    };
  } catch (ex) {
    return null;
  }
};

export const authService = {
  setUser,
  logout,
  getUser,
  getJwt,
};
