const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/adminRoute'); 
const userRoutes = require('./routes/UserRoute');

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const cors = require("cors");
app.use(cors());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const { getImeiByDevice, isValid } = require('node-imei'); 

// const imei = getImeiByDevice("Apple", "iPhone 14 Pro Max"); Example for an iPhone

// console.log(imei); 
