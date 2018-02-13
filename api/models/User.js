const mongoose = require("mongoose");

const mongooseBcrypt = require("mongoose-bcrypt")

let Place = require('./Place');

let FavouritePlace = require('./FavouritePlace');

let Visit = require('./Visit');

let Schema = mongoose.Schema;

let userSchema = new Schema({

	email: {type:String, required:true,unique:true},
	name : String,
	admin: {type:Boolean, default: false}

});

userSchema.plugin(mongooseBcrypt)


userSchema.virtual('places').get(function(){

	return Place.find({'_user':this._id})
})


userSchema.virtual('favourites').get(function(){

	return FavouritePlace.find({'_user':this._id},{'_place':true})

		.then((favs)=>{

			//console.log(favs)

			let placeIds = favs.map(function(fav){

			    return fav._place
			})

			//return placeIds

			return Place.find({'_id':{$in : placeIds }})
		})

})

userSchema.virtual('visits').get(function(){

	return Visit.find({'_user':this._id})
})

//Definimos el modelo

let User = mongoose.model("User",userSchema);

module.exports = User;