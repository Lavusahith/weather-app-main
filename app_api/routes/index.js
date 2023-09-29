var express = require('express');
var router = express.Router();
var ctrlforecasts = require('../controllers/weatherforecasts');
var ctrlReviews = require('../controllers/reviews');


router.get('/weatherforecasts', ctrlforecasts.weatherforecastsList);
router.post('/weatherforecasts', ctrlforecasts.weatherforecastsCreate);
router.get('/weatherforecasts/:forecastid', ctrlforecasts.weatherforecastsReadOne);
router.put('/weatherforecasts/:forecastsid', ctrlforecasts.weatherforecastsUpdateOne);
router.delete('/weatherforecasts/:forecastsid', ctrlforecasts.weatherforecastsDeleteOne);

// reviews
router.post('/weatherforecasts/:forecastsid/reviews', ctrlReviews.reviewsCreate);
router.get('/weatherforecasts/:forecastsid/reviews/:reviewid',ctrlReviews.reviewsReadOne);
router.put('/weatherforecasts/:forecastsid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/weatherforecasts/:forecastsid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);

module.exports = router;