import EventEmitter from "events";

class AuthService extends EventEmitter {
  isAuthenticated() {
    return localStorage.hasOwnProperty("userInfo");
  }
}

export default new AuthService();
