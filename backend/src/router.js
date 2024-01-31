/* eslint-env node, es6 */

const express = require("express");
const router = express.Router();

// All controllers
const controllers = require("./controllers");

// Route to get all users
router.get("/", controllers.getAllUsers);


module.exports = router;
