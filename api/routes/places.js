const express = require('express');
const router = express.Router();



let Place = require('../models/Place');

let placesController = require('../controllers/PlacesController');


router.route('/')

	.get(placesController.index)

	.post(placesController.multerMiddleware(),placesController.create)



router.route('/:id')

	.get(placesController.find,placesController.show)

	.put(placesController.multerMiddleware(),placesController.update)

	.delete(placesController.destroy)


module.exports = router;


