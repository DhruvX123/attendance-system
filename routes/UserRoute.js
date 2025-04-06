const express = require('express');
const router = express.Router();
const userControl = require('../controller/userControl');

router.post('/submit-location', userControl.userLocation)

module.exports = router;