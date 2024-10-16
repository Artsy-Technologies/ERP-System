import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Ensure the MongoDB URI is present
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MongoDB URI is not defined. Please check your .env file.");
    }

    // Connect to MongoDB without deprecated options
    await mongoose.connect(uri);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
