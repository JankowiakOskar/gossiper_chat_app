import axios from 'axios';

export const setAuthAxiosConfig = <T>(token: T): void => {
  if (token) {
    axios.defaults.headers.common['auth-token'] = token;
  } else {
    axios.defaults.headers.common['auth-token'] = null;
  }
};
