// axios
import axios from 'axios';
const API = process.env.VUE_APP_API;

export default {
  usersList() {
    return axios.get(API);
  },
};
