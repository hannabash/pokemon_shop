import axios from 'axios';

import { LOCAL_STORAGE_KEY } from '../constants/localStorageKeys';

const baseURL = 'https://demo-api.it-shatle.by';

const config = {
   baseURL: baseURL,
   timeout: 100000,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
   const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);

   config.headers['Authorization'] = `Bearer ${token}`;

   return config;
});

export default api;