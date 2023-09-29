const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  conditions: String,
  humidity: Number,
  windSpeed: Number,
  precipitation: Number
});

mongoose.model('weatherforecasts', weatherSchema);

