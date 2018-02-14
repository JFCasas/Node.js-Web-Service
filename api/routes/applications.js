const express = require('express');
const router = express.Router();


let applicationsController = require('../controllers/ApplicationsController');

const authenticateOwner = require('../middlewares/authenticateOwner');

router.route('/')

	.post(applicationsController.create)

/*router.route('/:id')

	.delete(
		
		applicationsController.find,
		authenticateOwner,
		applicationsController.destroy
		
		)*/


module.exports = router;