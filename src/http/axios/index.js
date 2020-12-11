// axios
import axios from 'axios';

export default new (class MainServices {
  usersList() {
    return axios.get('https://api.mocki.io/v1/853804f2/users');
  }
})();
