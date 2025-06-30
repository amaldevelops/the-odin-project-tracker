// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
    // this.searchResult={};
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  searchUser(firstName, email) {
    // Convert `this.storage` into an array of its values
    const users = Object.values(this.storage);

    // Find a user where `firstName` and `email` match
    const searchResult = users.find(
      (user) => user.firstName === firstName || user.email === email
    );

    // Log the result for debugging
    console.log("Search Result:", searchResult);

    // Return the matching user, or `null` if not found
    return searchResult || null;
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
