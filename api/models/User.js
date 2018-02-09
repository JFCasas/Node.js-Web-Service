const mongoose = require("mongoose");

const mongooseBcrypt = require("mongoose-bcrypt")

let Place = require('./Place');

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

//Definimos el modelo

let User = mongoose.model("User",userSchema);

module.exports = User;