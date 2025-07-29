import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL

});

export const loginUser = (data) => API.post('/auth/login', data);
