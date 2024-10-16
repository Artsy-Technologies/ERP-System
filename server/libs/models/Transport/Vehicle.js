import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true },
  numberPlate: { type: String, required: true, unique: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }, // Reference to Driver
  status: { type: String, default: 'Available' },
  maintenanceDate: { type: Date },
  statistics: {
    averageKm: { type: Number },
    distanceTravelled: { type: Number },
    averageFuelConsumption: { type: Number },
    fuelLeft: { type: Number },
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
