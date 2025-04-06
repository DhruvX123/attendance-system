const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    radius: Number, // Radius in meters
});

module.exports = mongoose.model('Location', LocationSchema)