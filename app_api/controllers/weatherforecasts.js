var mongoose = require('mongoose');
var weatherforecast = mongoose.model('weatherforecasts');

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.weatherforecastsCreate = function (req, res) {
  sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.weatherforecastsList = async function (req, res) {
  sendJsonResponse(res, 200, { status: 'success' });
  };

module.exports.weatherforecastsReadOne = async function (req, res) {
  try {
    const forecasts = await weatherforecast.findById(req.params.forecastid).exec();
    sendJsonResponse(res, 200, forecasts);
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
