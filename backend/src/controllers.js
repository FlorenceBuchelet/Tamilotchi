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

// Add a new user
const add = async (req, res, next) => {
  const user = req.body;
  try {
    const manager = new Manager({ table: 'user' });
    const insertId = await manager.create(user);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers,
  add,
};
