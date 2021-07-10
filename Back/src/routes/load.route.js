const express = require('express');
const router = express.Router();
const loadController = require('../controller/load.controller');

router.post('/add_load', loadController.add_load);
router.get('/get_loads', loadController.get_loads);

module.exports = router;