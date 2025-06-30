const express = require("express");
const app = express();
require('dotenv').config();
// console.log(process.env);

app.get("/", (req, res) => res.send("Hello, worlds, beautiful day!"));

// const PORT = 3000;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
