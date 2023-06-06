// apiEndpoints.js

const BASE_URL = 'https://server-finproject.onrender.com';

function apiEndpoints() {
  return {
    register: `${BASE_URL}/auth/register`,
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    twilioVerify: `${BASE_URL}/verify`,
    refresh: `${BASE_URL}/refresh`,
    user: `${BASE_URL}/user`,
  };
}

export default apiEndpoints;
