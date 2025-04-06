const Attendance = require('../models/userModel')
const Location = require('../models/adminModel')
const geolib = require("geolib");

exports.userLocation = async (req, res) => {
    const { userId, latitude, longitude } = req.body;
    const location = await Location.findOne();

    if (!location) {
        return res.status(400).json({ message: "Attendance location not set by admin" });
    }

    const isWithinRange = geolib.isPointWithinRadius(
        { latitude, longitude },
        { latitude: location.latitude, longitude: location.longitude },
        location.radius
    );

    const status = isWithinRange ? "Present" : "Absent";
    const attendance = new Attendance({ userId, latitude, longitude, status });
    await attendance.save();

    res.json({ message: `User marked as ${status}` });
};