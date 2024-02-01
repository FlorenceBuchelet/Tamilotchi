const argon2 = require("argon2");

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

// Get a specific tama
const getTama = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    const manager = new Manager({ table: 'tamilotchi' });
    const tama = await manager.readTama(id);
    if (tama == null) {
      res.sendStatus(404);
    } else {
      res.json(tama);
    }
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
};

// Add a new Tama
const addTama = async (req, res, next) => {
  const tama = req.body;
  try {
    const manager = new Manager({ table: 'tamilotchi'});
    const insertId = await manager.createTama(tama);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const manager = new Manager({ table: 'user' });
    const user = await manager.readByEmail(req.body.email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    // verify with argon2
    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.hashedPassword
    );
    if (verified) {
      // Respond with the user in JSON format without the hashed password
      delete user.hashed_password;
      res.json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getTama,
  add,
  addTama,
  login,
};
