const express = require('express');
const router = express.Router();


let applicationsController = require('../controllers/ApplicationsController');

const authenticateOwner = require('../middlewares/authenticateOwner');

const authenticateAdmin = require('../middlewares/authenticateAdmin');

const findUser = require('../middlewares/findUser');

router.route('/')

	.post(findUser,authenticateAdmin,applicationsController.create)

router.route('/:id')

	.delete(
		
		findUser,
		authenticateAdmin,
		applicationsController.destroy
		
		)


module.exports = router;