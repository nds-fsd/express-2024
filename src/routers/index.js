const express = require('express');
const restaurantRouter = require('./restaurants');
const userRouter = require('./users');
const { addDateMiddleware } = require('../middlewares');

const router = express.Router();

router.use('/restaurant', restaurantRouter);
router.use('/users', addDateMiddleware, userRouter);

module.exports = router;
