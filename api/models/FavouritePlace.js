const mongoose = require("mongoose");


let Schema = mongoose.Schema;


let favouriteSchema = new Schema({

	

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User",required:true},
	_place: {type: mongoose.Schema.Types.ObjectId, ref: "Place",required:true}

	
});




//Definimos el modelo

let FavouritePlace = mongoose.model("FavouritePlace",favouriteSchema);

module.exports = FavouritePlace;