const express = require('express');
const router = express.Router();

const Student = require('../models/student.model');

// get student by name
router.get('/getStudentByName/:name', async (req, res) => {
    res.json(
        await Student.findOne({
            name: req.params.name
        })
    );
});

// post a new student
router.post('/addStudent', async (req, res) => {
    res.json(
        await Student.create(req.body)
    );
});

module.exports = router;
