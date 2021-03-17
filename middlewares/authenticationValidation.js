const Joi = require('joi');

const name = Joi.string().required();
const email = Joi.string().email().required();
const password = Joi.string().min(8).max(32).required();

const authenticationValidation = {
  register(req, res, next) {
    const schema = Joi.object().keys({
      name,
      email,
      password,
    });

    const { error } = schema.validate({
      ...req.body,
    });

    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'name is required',
          });
          break;
        case 'email':
          res.status(400).send({
            error: 'valid email is required',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'password of a minimum of 8 characters is required',
          });
          break;
        default:
          res.status(400).send({
            error: 'registration information is not valid',
          });
      }
    } else {
      next();
    }
  },
};

module.exports = authenticationValidation;
