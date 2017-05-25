var express = require('express');
var router = express.Router();

var LocationsController = require('../controllers/locations');
var UserController = require('../controllers/user');


router.get('/:city', LocationsController.fetchLocations);
router.get('/user/:name', UserController.fetchLocations);
router.post('/auth/:id', UserController.pushLocation);

module.exports = router;
