const express = require('express');
const router = express.Router();



let Place = require('../models/Place');

let placesController = require('../controllers/PlacesController');

let authenticateOwner = require('../middlewares/authenticateOwner');


router.route('/')

	.get(placesController.index)

	.post(placesController.multerMiddleware(),placesController.create)



router.route('/:slug')

	.get(placesController.find,placesController.show)

	.put(placesController.find,authenticateOwner,placesController.multerMiddleware(),placesController.update)

	.delete(placesController.find,authenticateOwner,placesController.destroy)


module.exports = router;


