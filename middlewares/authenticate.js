const jwt = require('jsonwebtoken');
const config = require('./config');

function authenticate(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).send({
      message: 'authentication is required',
    });
  }

  const payload = jwt.verify(token, config.JWT_SECRET);

  if (!payload) {
    return res.status(401).send({
      message: 'authentication is required',
    });
  }

  next();
}

module.exports = authenticate;
