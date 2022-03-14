const mongoose = require('mongoose')
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    university: { type: String },
    gpa: { type: Number },
    year: { type: Number },
    city: { type: String },
    country: { type: String },
    address: { type: String },
    addinfo: { type: String }

});
module.exports = mongoose.model('Student', studentSchema);