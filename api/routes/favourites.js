const express = require('express');
const router = express.Router();



let FavouritePlace = require('../models/FavouritePlace');

let favouritesController = require('../controllers/FavouritesController');

let authenticateOwner = require('../middlewares/authenticateOwner');


router.route('/')

	

	.post(favouritesController.create)



router.route('/:id')

	.delete(favouritesController.find,authenticateOwner,favouritesController.destroy)


module.exports = router;