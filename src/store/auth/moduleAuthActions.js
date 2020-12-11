export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // If there's user data in response
      if (payload.email == 'demo@miaguila.com' && payload.password == 'Dm123456') {
        // Update user details
        commit('UPDATE_USER_INFO', payload, { root: true });
        // Set bearer token in axios
        resolve(payload);
      } else {
        reject({ error: 'Credenciales incorrectas' });
      }
    });
  },
};
