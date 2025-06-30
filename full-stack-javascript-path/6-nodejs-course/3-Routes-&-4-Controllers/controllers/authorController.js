// controllers/authorController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorID } = req.params;
  console.log(req.params);
  const author = await db.getAuthorById(Number(authorID));

  if (!author) {
    throw new CustomNotFoundError("Author Not Found Mate");
  } else {
    res.send(`Author Name: ${author.name}`);
  }
});

module.exports = { getAuthorById };
