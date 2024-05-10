const express = require('express');
const restaurantRouter = require('./restaurants');
const categoryRouter = require('./category');
const userRouter = require('./users');
const { addDateMiddleware } = require('../middlewares');
const { jwtMiddleware } = require('../security/jwt');
const { authRouter } = require('./auth');

const router = express.Router();

router.use('/restaurant', jwtMiddleware,restaurantRouter);
router.use('/category', jwtMiddleware,categoryRouter);
router.use('/users', jwtMiddleware,addDateMiddleware, userRouter);
router.use('/auth', authRouter);

module.exports = router;
