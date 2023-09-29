var mongoose = require('mongoose');

var weatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  
});

var weatherforecasts = mongoose.model('weatherforecasts', weatherSchema );

module.exports = weatherforecasts;

[
  {
    "location": "New York",
    "date": "2023-09-28T12:00:00Z",
    "temperature": 75,
    "conditions": "Sunny",
    "humidity": 60,
    "windSpeed": 10,
    "precipitation": 0
  },
  {
    "location": "Los Angeles",
    "date": "2023-09-28T14:00:00Z",
    "temperature": 82,
    "conditions": "Partly Cloudy",
    "humidity": 55,
    "windSpeed": 8,
    "precipitation": 0
  },
  {
    "location": "Chicago",
    "date": "2023-09-28T13:00:00Z",
    "temperature": 68,
    "conditions": "Rainy",
    "humidity": 75,
    "windSpeed": 15,
    "precipitation": 0.5
  }
]
