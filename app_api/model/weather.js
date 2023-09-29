var mongoose = require('mongoose');

var weatherSchema = new mongoose.Schema({
  location: {
    type:String,
    required:true
  },
  date:{
    type:Number,
    required:true
  },
  temperature:{
    type:Number,
    required:true
  },
  conditions:{
    type:String,
    required:true
  },
  humidity: {
    type:Number,
    required:true
  },
  windspeed:{
    type:Number,
    required:true
  },
  precipitation:{
    type:Number,
    required:true
  }

});
var weatherforecasts = mongoose.model('weatherforecasts', weatherSchema );

module.exports = weatherforecasts;