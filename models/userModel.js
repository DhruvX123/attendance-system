const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    userId: String,
    latitude: Number,
    longitude: Number,
    status: String, // "Present" or "Absent"
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', AttendanceSchema)