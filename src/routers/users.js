const express = require("express");
const userController = require("../controlers/users");
const { addDateMiddleware, validateUser } = require("../middlewares");

const router = express.Router();

router.get('/', addDateMiddleware, userController.getUsers);
router.get('/:id', addDateMiddleware, userController.getUser);
router.post('/', validateUser, userController.createUser);
router.put('/:id', userController.updateUser);
router.patch('/:id', userController.patchUser);
router.delete('/:id',  userController.deleteUser);

module.exports = router;
