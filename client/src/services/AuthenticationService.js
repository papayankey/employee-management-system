import { AuthenticationAPI } from './Api';

const AuthenticationService = {
  register(userData) {
    return AuthenticationAPI().post('register', { ...userData });
  },
  login(userData) {
    return AuthenticationAPI().post('login', { ...userData });
  },
  getEmployees() {
    return AuthenticationAPI().get('/employees/all');
  },
};

export { AuthenticationService };
