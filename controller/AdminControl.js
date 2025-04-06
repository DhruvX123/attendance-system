const Location = require('../models/adminModel')
const Attendance = require('../models/userModel')

exports.setLocation = async (req, res) => {
    const { latitude, longitude, radius } = req.body;
    await Location.deleteMany({}); // Remove previous location
    const location = new Location({ latitude, longitude, radius });
    await location.save();
    res.json({ message: "Location set successfully" });
};

exports.getAttendance = async (req, res) => {
    const records = await Attendance.find();
    res.json(records);
};