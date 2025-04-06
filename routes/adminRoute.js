const express = require('express');
const router = express.Router();
const AdminControl = require('../controller/AdminControl');

router.post('/set-location', AdminControl.setLocation)
router.get('/attendance-records', AdminControl.getAttendance)

module.exports = router;