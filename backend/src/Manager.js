/* eslint-env node, es6 */

const database = require("../database/client");

class Manager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
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
