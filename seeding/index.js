const { sequelize, Employee } = require('./models');
const employeeJSON = require('./employees.json');

sequelize.sync({ force: true }).then(async function () {
  // seed employee data
  await Promise.all(
    employeeJSON.map(employee => {
      Employee.create(employee);
    })
  );
});
