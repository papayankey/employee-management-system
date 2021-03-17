const { Employee } = require('../models');

const employeeController = {
  async getEmployees(_, res) {
    try {
      const employees = await Employee.findAll();
      res.status(200).json(employees);
    } catch {
      res.status(500).json({
        error: 'error occurred querying the database',
      });
    }
  },
  async getEmployee(req, res) {
    const id = Number(req.params.id);

    if (!id) {
      return res.status(400).json({
        error: 'employee does not exist',
      });
    }

    try {
      const employee = await Employee.findOne({
        where: {
          id,
        },
      });
      res.status(200).json(employee);
    } catch {
      res.status(500).json({
        error: 'error occurred querying the database',
      });
    }
  },
  async addEmployee(req, res) {
    try {
      const employee = await Employee.create(req.body);
      res.status(201).json({
        message: 'employee added',
        employee,
      });
    } catch (error) {
      if (error.fields.includes('email')) {
        return res.status(400).json({
          error: 'email already registered',
        });
      }

      res.status(500).json({
        error: 'error occurred adding employee',
      });
    }
  },
  async deleteEmployee(req, res) {
    try {
      await Employee.destroy({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json({
        message: 'employee deleted',
      });
    } catch {
      res.status(500).json({
        error: 'error occurred deleting employee',
      });
    }
  },
  async editEmployee(req, res) {
    try {
      const success = await Employee.update(
        { ...req.body, updatedAt: Date.now().toLocaleString('UTC') },
        {
          where: {
            id: Number(req.params.id),
          },
        }
      );

      if (success) {
        res.status(200).json({
          message: 'employee updated',
        });
      }
    } catch {
      res.status(500).json({
        error: 'error occurred editing employee',
      });
    }
  },
};

module.exports = employeeController;
