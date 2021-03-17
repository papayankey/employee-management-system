const Router = require('express').Router();

const employeeController = require('./controllers/employeeController');
const authenticate = require('./middlewares/authenticate');

Router.use('/employees/*?', authenticate);
Router.get('/employees', employeeController.getEmployees);
Router.get('/employees/:id', employeeController.getEmployee);
Router.post('/employees/add', employeeController.addEmployee);
Router.delete('/employees/:id/delete', employeeController.deleteEmployee);
Router.patch('/employees/:id/edit', employeeController.editEmployee);

module.exports = Router;
