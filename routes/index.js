const Router = require('express').Router();
const authenticationRoutes = require('./authenticationRoutes');
const employeeRoutes = require('./employeeRoutes');

Router.use(authenticationRoutes, employeeRoutes);

module.exports = Router;
