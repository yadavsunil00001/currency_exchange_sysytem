
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.coinswitch.co/v2',
    timeout: 1000,
    headers: {'x-api-key': 't41E6v16mG6xqOUK74E2F7Py6UVng4K6n1pO3Jig','x-user-ip':'1.1.1.1'}
  });