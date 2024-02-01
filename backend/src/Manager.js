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
      [user.email, user.hashedPassword]
    );
    return result.insertId;
  }

  async createTama(tama) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, name, sprite)
      VALUES (?,?,?);`,
      [tama.user_id, tama.name, tama.sprite]
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

  async readTama() {
    const [rows] = await this.database.query(
      `SELECT *
      FROM ${this.table}
      WHERE user_id = ?;`
    );
    return rows[0];
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT *
        FROM ${this.table} 
        WHERE email = ?`,
      [email]
    );
      // Return the user as first row of the result
      return rows;
  }
}

module.exports = Manager;
