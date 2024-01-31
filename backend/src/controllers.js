/* eslint-env node, es6 */

const Manager = require("./Manager");

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    // Specify the table
    const manager = new Manager({ table: 'user' });
    // Get the Manager
    const users = await manager.readAllUsers();
    // Return the array of users in json
    res.json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
};
