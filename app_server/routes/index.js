var express = require('express');
var express =require('express');
var router = express.Router();
var ctrlothers=require('../controller/others');

router.get('/Forecast',ctrlothers.Forecast);
router.get('/AboutUs',ctrlothers.AboutUs);
router.get('/Articles',ctrlothers.Articles);
router.get('/contact',ctrlothers.contact);

module.exports = router;
