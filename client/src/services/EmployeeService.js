import { EmployeeAPI } from './Api';

const EmployeeService = {
  getEmployees() {
    return EmployeeAPI().get('/');
  },
  deleteEmployee(id) {
    return EmployeeAPI().delete(`/${id}/delete`);
  },
  editEmployee(id, formData) {
    return EmployeeAPI().patch(`/${id}/edit`, formData);
  },
  addEmployee(formData) {
    return EmployeeAPI().post(`/add`, formData);
  },
};

export { EmployeeService };
