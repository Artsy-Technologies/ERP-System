require('dotenv').config(); // Load environment variables from .env file at the top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL (optional, for testing)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Test MongoDB connection with a sample model
const testSchema = new mongoose.Schema({ name: String });
const TestModel = mongoose.model('Test', testSchema);

app.get('/test-db', async (req, res) => {
    try {
        // Create a test document
        const testDoc = new TestModel({ name: 'Test Document' });
        await testDoc.save();
        res.status(200).send('MongoDB connection is working and test document saved.');
    } catch (err) {
        console.error('Error during test DB operation:', err);
        res.status(500).send('Error connecting to MongoDB.');
    }
});

// Database Connection
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the MongoDB URI to verify it is read correctly
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true // Use the new Server Discover and Monitoring engine
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
