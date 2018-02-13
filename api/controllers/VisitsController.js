let Visit = require('../models/Visit')

let User = require('../models/User')


function find(req,res,next){

	Visit.findById(req.params.id)


	  .then((visit)=>{

	  	req.visit = visit
	  	req.mainObj = visit
	  	next()
	  
	  })

      
      .catch((err)=>{

		next(err)
	  
	  })
}


function create(req,res){

	Visit.create({

		_place: req.body._place,
		
		_user:req.user.id,

		observation:req.body.observation,
		reaction: req.body.reaction


	}).then((doc)=>{

		res.json(doc)


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}



function destroy(req,res){

	Visit.findByIdAndRemove(req.params.id)

        .then(() => res.json({message: "La visita se ha eliminado correctamente"}))
        .catch((err)=>{

			console.log(err)
			res.json(err)
	    })
}

function myVisits(req,res){

	User.findOne({'_id':req.user.id})

		.then((user)=>{

			user.visits.then((visits)=>{

				res.json(visits)
			
			})
		
		}).catch((err)=>{

			res.json(err)
		})

}

module.exports = {

	
	create:create,
	destroy:destroy,
	find:find,
	myVisits
}