module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    gender: DataTypes.TEXT,
  });

  return Employee;
};
