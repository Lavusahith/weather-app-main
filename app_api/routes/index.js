var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/weatherforecasts');
var ctrlReviews = require('../controllers/reviews');


router.get('/weatherforecasts', ctrlLocations.weatherforecastsList);
router.post('/weatherforecasts', ctrlLocations.weatherforecastsCreate);
router.get('/weatherforecasts/:locationid', ctrlLocations.weatherforecastsReadOne);
router.put('/weatherforecasts/:locationid', ctrlLocations.weatherforecastsUpdateOne);
router.delete('/weatherforecasts/:locationid', ctrlLocations.weatherforecastsDeleteOne);

// reviews
router.post('/weatherforecasts/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/weatherforecasts/:locationid/reviews/:reviewid',ctrlReviews.reviewsReadOne);


router.put('/weatherforecasts/:locationid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/weatherforecasts/:locationid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);


module.exports = router;