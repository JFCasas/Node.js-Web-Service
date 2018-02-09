let Place = require('../models/Place')

const multer = require("multer")

var upload = multer({ dest: 'uploads/' })


function find(req,res,next){

	Place.findOne({slug:req.params.slug})

		.then((doc)=>{

			req.place = doc
			next()
		})

		.catch((err)=>{

			console.log(err)
			res.json(err)
		})


}

/*function prueba(req,res,next){

	console.log(req)
	next()
}*/



function index(req,res){

	//Mostrar todos los recursos

	//Place.find()

	Place.paginate({},{ page:req.query.page || 1, limit:10, sort:{_id: -1} })

		.then((docs)=>{

			res.json(docs)
		
		}).catch((err)=>{

			console.log(err)
			res.json(err)
		})
}

function create(req,res){

	let placeData = {};

	if (req.body.title) {placeData["title"] = req.body.title }
    if (req.body.description) {placeData["description"] = req.body.description }
    if (req.body.acceptsCreditCard) {placeData["acceptsCreditCard"] = req.body.acceptsCreditCard }
    if (req.files.cover) {placeData["coverImage"] = req.files.cover[0].path }
    if (req.files.avatar) {placeData["avatarImage"] = req.files.avatar[0].path }
    if (req.body.openHour) {placeData["openHour"] = req.body.openHour }
    if (req.body.closeHour) {placeData["closeHour"] = req.body.closeHour }
    //if (req.body._user) {placeData["_user"] = req.body._user }
	placeData["_user"] = req.user.id

    Place.create(placeData).then((doc)=>{

		res.json(doc)


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}

function show(req,res){

	//Mostrar un recurso

	/*Place.findById(req.params.id)

      .then((doc) => res.json(doc))
      .catch((err)=>{

			console.log(err)
			res.json(err)
	  })*/

	  res.json(req.place)
}

function update(req,res){

	//Actualizar un recurso

	let placeData = {};

	if (req.body.title) {placeData["title"] = req.body.title }
    if (req.body.description) {placeData["description"] = req.body.description }
    if (req.body.acceptsCreditCard) {placeData["acceptsCreditCard"] = req.body.acceptsCreditCard }
    if (req.files.cover) {placeData["coverImage"] = req.files.cover[0].path }
    if (req.files.avatar) {placeData["avatarImage"] = req.files.avatar[0].path }
    if (req.body.openHour) {placeData["openHour"] = req.body.openHour }
    if (req.body.closeHour) {placeData["closeHour"] = req.body.closeHour }
    
    Place.findOne({slug:req.params.slug})

      .then((place) => {

			  place.set(placeData);
			  
			  place.save((err, updatedDoc) => {
			    
			    if (err){

			    	console.log(err)
			    	res.json(err)

			    } 
			    res.json(updatedDoc)
			  });

		})
      
        .catch((err)=>{

			console.log(err)
			res.json(err)
	    })
}

function destroy(req,res){

	//Eliminar un recurso

	Place.findOneAndRemove({slug:req.params.slug})

        .then(() => res.json({message: "El elemento se ha eliminado correctamente"}))
        .catch((err)=>{

			console.log(err)
			res.json(err)
	    })
}

function multerMiddleware(){

	return upload.fields([
		{ name: 'cover', maxCount: 1 }, 
		{ name: 'avatar', maxCount: 1 }
	])

}

module.exports = {
	//prueba:prueba,
	index:index,
	create:create,
	show:show,
	update:update,
	destroy:destroy,
	find:find,
	multerMiddleware:multerMiddleware
	
}