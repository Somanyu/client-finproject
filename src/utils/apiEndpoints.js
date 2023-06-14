// apiEndpoints.js

// const BASE_URL = 'http://localhost:3001';

function apiEndpoints() {
  return {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    twilioVerify: '/verify',
    refresh: '/refresh',
    user: '/user',
    updateUser: '/user/update',
    deleteUser: '/user/delete',
  };
}

export default apiEndpoints;
