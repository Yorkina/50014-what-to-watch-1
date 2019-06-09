import axios from 'axios';

import {ActionCreator} from './reducer/user/user';


const API_CONFIG = {
  baseURL: `https://es31-server.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true,
};

const FORBIDDEN_STATUS = 403;

export const createAPI = (pushLoginStateToHistory) => {
  const api = axios.create(API_CONFIG);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === FORBIDDEN_STATUS) {
      debugger
      pushLoginStateToHistory();
    }

    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
