const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    school: String,
    hobbies: [String]
});

module.exports = mongoose.model('Student', StudentSchema);