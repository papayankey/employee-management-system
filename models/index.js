const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config');
const fs = require('fs');
const path = require('path');

const db = {};

const sequelize = new Sequelize({
  dialect: config.DB.DIALECT,
  storage: config.DB.STORAGE,
});

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
