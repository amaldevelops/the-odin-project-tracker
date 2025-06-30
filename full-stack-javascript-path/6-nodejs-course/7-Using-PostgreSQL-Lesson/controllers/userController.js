const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchForUserNameGet(req, res) {
  const { username } = req.query;
  let result = await db.searchForUserName(username);
  res.render("search", { SearchResult: result });
}

async function deleteAllUserNames(req, res) {
  const { deleteCommand } = req.query;
  let result = await db.deleteAllUserNamesQueryDb();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchForUserNameGet,
  deleteAllUserNames,
};
