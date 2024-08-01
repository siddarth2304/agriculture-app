const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  crops: { type: [String], required: true },
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;