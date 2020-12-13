// axios
import axios from 'axios';

export default {
  usersList() {
    return axios.get('https://api.mocki.io/v1/853804f2/users');
  },
};
