const { Router } = require("express");

const usersController = require("../controllers/userController");

const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);

usersRouter.get("/new", usersController.createUsernameGet);

usersRouter.post("/new", usersController.createUsernamePost);

usersRouter.get("/search", usersController.searchForUserNameGet);

usersRouter.get("/delete", usersController.deleteAllUserNames);

module.exports = usersRouter;
