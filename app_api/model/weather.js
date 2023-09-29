const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
});

mongoose.model('weatherforecasts', weatherSchema);

