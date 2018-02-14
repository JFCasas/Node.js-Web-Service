let Application = require('../models/Application')


function find(req,res,next){

	Application.findById(req.params.id)


	  .then((application)=>{

	  	req.application = application
	  	req.mainObj = application
	  	next()
	  
	  })

      .catch((err)=>{

		next(err)
	  
	  })
}


function create(req,res){

	Application.create({

		name : req.body.name,
		origins : req.body.origins


	}).then((doc)=>{

		res.json(doc)


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}


function destroy(req,res){

	Application.findByIdAndRemove(req.params.id)

        .then(() => res.json({message: "La aplicación se ha eliminado correctamente"}))
        .catch((err)=>{

			console.log(err)
			res.json(err)
	    })
}

module.exports = {

	create:create,
	destroy:destroy,
	find:find	
}