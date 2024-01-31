const express = require("express");
const router = express.Router();

// All controllers
const controllers = require("./controllers");

// Route to get all users
router.get("/", controllers.getAllUsers);

// Registering
router.post("/user/register", controllers.add);


module.exports = router;
