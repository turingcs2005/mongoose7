const express = require('express');
const router = express.Router();

const Student = require('../models/student.model');

// get student by name
router.get('/getStudentByName/:name', async (req, res) => {
    try {
        const data = await Student.findOne({
            name: req.params.name
        });
        res.json(data);
    } catch (e) {
        console.log('Failed to query MongoDB database: ', e);
    }
});

// post a new student
router.post('/addStudent', async (req, res) => {
    try {
        const data = await Student.create(req.body);
        res.json(data);
        console.log('Data successfully saved to MongoDB database.');
    } catch (e) {
        console.log('Failed to save data to MongoDB database: ', e);
    }
});

module.exports = router;
