const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4455;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// connecting to MongoDB database
const MongoDB_Connection_String = 'mongodb://localhost/test';
async function connectToMongoDB() {
    try {
        await mongoose.connect(MongoDB_Connection_String);
        console.log('MongoDB database successfully connected!');
    } catch (e) {
        console.log('MongoDB database connection error: ', e);
    }
}

connectToMongoDB();

const studentRoutes = require('./routes/student.route');
app.use('/api', studentRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`);
});