const express = require("express");

const app = express();
const port = 3000;

const usersRouter = require("./routes/userRouter");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
