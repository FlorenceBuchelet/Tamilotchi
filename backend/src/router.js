const express = require("express");
const router = express.Router();

// hashing password middleware
const { hashPassword } = require("./services/auth");

// All controllers
const controllers = require("./controllers");

// Route to get all users
router.get("/", controllers.getAllUsers);

// Registering
router.post("/user/register", hashPassword, controllers.add);

// Login
router.post("/login", controllers.login);

// New Tama
router.post("/tama/create", controllers.addTama);
// Read Tama
router.get("/tama/:id", controllers.getTama);

// Get all Tamas a user has
router.get("/user/:id/tamas", controllers.getUserTamas);

// Tama stats save
router.put("/tama/:id/update", controllers.updateStats)


module.exports = router;
