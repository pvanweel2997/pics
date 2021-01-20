import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wEcmWZJ9bEoXvC7ZxTdux5S52waymOcVtH2s8nQHs6s'
  },
});

