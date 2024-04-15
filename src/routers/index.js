const express = require('express');
const restaurantRouter = require('./restaurants');

const router = express.Router();

router.use('/restaurant', restaurantRouter);

module.exports = router;
