const Router = require('express').Router();

const authenticationController = require('../controllers/authenticationController');
const authenticationValidation = require('../middlewares/authenticationValidation');

Router.post(
  '/register',
  authenticationValidation.register,
  authenticationController.register
);
Router.post('/login', authenticationController.login);

module.exports = Router;
