const User = require('../models/User')

module.exports = (req,res,next)=>{

	if ( req.user) {

		User.findById(req.user.id)

			.then((user)=>{

				req.fullUser = user

				return next()
			
			})

		
	}else{

		next(new Error('You have no permission to be here'))
	}

	
}