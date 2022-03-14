const mongoose = require('mongoose')
const { Schema } = mongoose;

const universitySchema = new Schema({
    name: { type: String },
    city: { type: String },
    postaladdress: { type: String },
    country: { type: String },
    address: { type: String }

});
module.exports = mongoose.model('University', universitySchema);