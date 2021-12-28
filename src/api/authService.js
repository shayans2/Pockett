import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const loginWithJwt = (jwt) => {
  Cookies.set('token', jwt, { expires: 1 });
};

const logout = () => {
  Cookies.remove('token');
};

const getJwt = () => {
  return Cookies.get('token');
};

const getCurrentUser = () => {
  try {
    const jwt = Cookies.get('token');
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};

export const authService = {
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
