import axios from 'axios';

export default axios.create({
  baseURL: 'https://bryanode.herokuapp.com/api',
});
