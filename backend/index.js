/* eslint-env node, es6 */

require("dotenv").config();
const express = require("express");
const app = express();

// Listening app
const port = process.env.APP_PORT;
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

// Cors
const cors = require("cors");
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

// Parsing
app.use(express.json());

// Routes
const router = require("./src/router");
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "hello from backend :D" });
});
