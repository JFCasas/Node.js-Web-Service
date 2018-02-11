let FavouritePlace = require('../models/FavouritePlace')

function find(req,res,next){

	FavouritePlace.findById(req.params.id)

		.then((fav)=>{

			req.favourite = fav
			req.mainObj = fav
			next()
		})

		.catch((err)=>{

			console.log(err)
			res.json(err)
		})


}

function create(req,res){

	FavouritePlace.create({

		_place: req.body._place,
		
		_user:req.user.id


	}).then((doc)=>{

		res.json(doc)


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}

function destroy(req,res){

	

	FavouritePlace.findByIdAndRemove(req.params.id)

        .then(() => res.json({message: "El favorito se ha eliminado correctamente"}))
        .catch((err)=>{

			console.log(err)
			res.json(err)
	    })
}

module.exports = {

	
	create:create,
	destroy:destroy,
	find:find,
	
}