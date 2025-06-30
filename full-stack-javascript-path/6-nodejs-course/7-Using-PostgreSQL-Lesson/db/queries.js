const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchForUserName(username) {
  try {
    const { rows } = await pool.query(
      "SELECT username FROM usernames WHERE username ILIKE $1",
      [`%${username}%`]
    );
    console.log(rows);
    return rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function deleteAllUserNamesQueryDb() {
  try {
    await pool.query("DELETE FROM usernames");
  } catch (err) {
    console.error("Error Deleting from usernames", err);
    throw err;
  }
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchForUserName,
  deleteAllUserNamesQueryDb,
};
