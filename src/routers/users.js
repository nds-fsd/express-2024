const express = require("express");
const UserController = require("../controlers/users");
const { addDateMiddleware, validateUser } = require("../middlewares");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/", validateUser, UserController.create);

module.exports = router;
