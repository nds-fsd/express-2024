const express = require('express');
const restaurantRouter = require('./restaurants');
const categoryRouter = require('./category');
const userRouter = require('./users');
const { addDateMiddleware } = require('../middlewares');

const router = express.Router();

router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);
router.use('/users', addDateMiddleware, userRouter);

module.exports = router;
