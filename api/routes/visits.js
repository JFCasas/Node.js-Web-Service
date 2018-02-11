const express = require('express');
const router = express.Router();

let visitsController = require('../controllers/VisitsController');

//let prueba = require('../middlewares/prueba')

const authenticateOwner = require('../middlewares/authenticateOwner');

router.route('/')

	.post(visitsController.create)

router.route('/:id')

	.delete(
		visitsController.find,
		authenticateOwner,
		visitsController.destroy
		)


module.exports = router;