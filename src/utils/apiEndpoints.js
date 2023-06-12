// apiEndpoints.js

// const BASE_URL = 'https://api.somanyu.tech';
const BASE_URL = 'http://localhost:3001';

function apiEndpoints() {
  return {
    register: `${BASE_URL}/auth/register`,
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    twilioVerify: `${BASE_URL}/verify`,
    refresh: `${BASE_URL}/refresh`,
    user: `${BASE_URL}/user`,
    updateUser: `${BASE_URL}/user/update`,
    deleteUser: `${BASE_URL}/user/delete`,
  };
}

export default apiEndpoints;
