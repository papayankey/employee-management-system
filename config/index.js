const path = require('path');

const config = {
  PORT: process.env.PORT || 4000,
  DB: {
    DIALECT: process.env.DIALECT || 'sqlite',
    STORAGE: path.resolve(__dirname, '../db.sqlite'),
  },
  JWT_SECRET: 'lksjfiejsjflsie1324lnw09sdjffm_msn@34',
};

module.exports = config;
