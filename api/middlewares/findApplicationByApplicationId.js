const Application = require('../models/Application')

module.exports = (req,res,next)=>{

	if (req.application) return next()

	const applicationId = req.headers.application

	/*console.log("-------------")

	console.log(applicationId)

	console.log("-------------")*/

	if (!applicationId) return next()


	Application.findOne({applicationID:applicationId})

		.then(app=>{

			if(!app) return next(new Error('Invalid Application'))

			req.application = app

			next()


		}).catch(error=>{

			next(error)
		})

}