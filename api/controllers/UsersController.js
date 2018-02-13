let User = require('../models/User')


function index(req,res){

	//Mostrar todos los recursos

	User.find()

		.then((docs)=>{

			res.json(docs)
		
		}).catch((err)=>{

			console.log(err)
			res.json(err)
		})
}

function create(req,res,next){

	console.log(req.body.admin)

	User.create({

		email: req.body.email,
		name: req.body.name,
		password: req.body.password,
		admin:req.body.admin


	}).then((user)=>{

		req.user = user

		next()

		//res.json(doc)


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}

function myPlaces(req,res){

	User.findOne({'_id':req.user.id})

		.then((user)=>{

			user.places.then((places)=>{

				res.json(places)
			
			})
		
		}).catch((err)=>{

			res.json(err)
		})

}



module.exports = {

	index:index,
	create:create,
	myPlaces:myPlaces

}