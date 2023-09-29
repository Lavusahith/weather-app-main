const mongoose = require('mongoose');
const weatherforecast = mongoose.model('weatherforecasts');

const sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

// Controller methods for WeatherForecast
module.exports.weatherforecastsCreate = function (req, res) {
  sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.weatherforecastsList = async function (req, res) {
  sendJsonResponse(res, 200, { status: 'success' });
  };

module.exports.weatherforecastsReadOne = async function (req, res) {
  try {
    const forecast = await weatherforecast.findById(req.params.forecastid).exec();
    if (!forecast) {
      sendJsonResponse(res, 404, { error: 'Weather forecast not found' });
    } else {
      sendJsonResponse(res, 200, forecast);
    }
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }
  };

module.exports.weatherforecastsUpdateOne = function (req, res) {
  
  sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.weatherforecastsDeleteOne = function (req, res) {
 
  sendJsonResponse(res, 200, { "status": "success" });
};
