const database = require("../database/client");

class Manager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password)
      VALUES (?,?);`,
      [user.email, user.password]
    );
    return result.insertId;
  }

  async readAllUsers() {
    // Execute the SQL SELECT query to read all users
    const [rows] = await this.database.query(
      `SELECT *
        FROM ${this.table};`
    );
    // Return the array of users
    return rows;
  }
}

module.exports = Manager;
