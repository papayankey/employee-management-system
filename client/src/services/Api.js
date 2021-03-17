import axios from 'axios';

export function AuthenticationAPI() {
  return axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? '/api'
        : 'http://localhost:4000/api',
  });
}

export function EmployeeAPI() {
  return axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? '/api/employees'
        : 'http://localhost:4000/api/employees',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
