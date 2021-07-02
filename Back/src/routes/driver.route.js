const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');

router.post('/add_driver', driverController.add_driver);
router.get('/get_drivers', driverController.get_drivers);

module.exports = router;