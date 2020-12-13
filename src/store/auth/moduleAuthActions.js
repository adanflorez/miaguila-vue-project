export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // If there's user data in response
      if (payload.email == 'demo@miaguila.com' && payload.password == 'Dm123456') {
        // Update user details
        commit('UPDATE_USER_INFO', payload, { root: true });
        // JUST IN CASE: Set accessToken in state and bearer in axios to valid requests
        // commit('UPDATE_USER_ACCESS_TOKEN', 'acces-token')
        resolve(payload);
      } else {
        reject({ error: 'Credenciales incorrectas' });
      }
    });
  },
};
