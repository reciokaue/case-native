import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.12:3030',
});

export {api};