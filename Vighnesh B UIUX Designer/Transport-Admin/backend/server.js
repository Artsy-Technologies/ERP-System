const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vehicle-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));

// Define Mongoose Schemas
const VehicleSchema = new mongoose.Schema({
    busNo: String,
    model: String,
    noPlate: String,
    driver: String,
    status: String,
    lastMaintenance: Date,
});

const DriverSchema = new mongoose.Schema({
    name: String,
    licenseNo: String,
    vehicleAssigned: String,
    contact: String,
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
const Driver = mongoose.model('Driver', DriverSchema);

// Routes
app.post('/add-vehicle', async (req, res) => {
    const newVehicle = new Vehicle(req.body);
    try {
        await newVehicle.save();
        res.json({ message: "Vehicle added successfully!" });
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

app.post('/add-driver', async (req, res) => {
    const newDriver = new Driver(req.body);
    try {
        await newDriver.save();
        res.json({ message: "Driver added successfully!" });
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

app.get('/vehicles', async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
});

app.get('/drivers', async (req, res) => {
    const drivers = await Driver.find();
    res.json(drivers);
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
