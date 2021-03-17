const jwt = require('jsonwebtoken');
const config = require('./config');

function createJWTToken(user) {
  return jwt.sign({ email: user.email }, config.JWT_SECRET, {
    expiresIn: '24h', // expires in a day
  });
}

module.exports = createJWTToken;
