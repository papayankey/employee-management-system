const bcrypt = require('bcrypt');

const SALT_ROUNDS = 8;
async function hashPassword(user, _) {
  if (!user.changed('password')) {
    return;
  }

  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.password = hashedPassword;
}

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.TEXT,
      required: true,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.TEXT,
      required: true,
    },
  });

  // instance method
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  // hooks
  User.beforeUpdate(hashPassword);
  User.beforeSave(hashPassword);

  return User;
};
