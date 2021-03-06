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

			req.validRequest = req.application.origins.split(",").find(origin=>{
        		origin = origin.replace(/\s/g,'');
        		console.log(req.headers.origin);
        		return origin == req.headers.origin;
      		})



		}).catch(error=>{

			next(error)
		})

}