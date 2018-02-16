const Application = require('../models/Application')

module.exports = (req,res,next)=>{

	Application.count()

		.then(appCount=>{

			if(appCount > 0 && !req.application) {

				return next(new Error('An application is required to consume this API'))
			}

			req.validApp = true

			next()

				
		}).catch(error=>{

			next(error)
		})

}