const Application = require('../models/Application')

module.exports = (req,res,next)=>{

	if (req.xhr) return next()

	const secret = req.headers.secret

	if (!secret) return next()


	Application.findOne({secret:secret})

		.then(app=>{

			if(!app) return next(new Error('Invalid Application'))

			req.application = app

			next()


		}).catch(error=>{

			next(error)
		})

}