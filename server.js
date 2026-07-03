const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

