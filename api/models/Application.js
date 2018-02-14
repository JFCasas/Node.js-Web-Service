const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let applicationSchema = new Schema({

	applicationID : {

		type:String,
		required:true,
		unique:true
	},

	secret : {

		type:String,
		required:true,
		unique:true
	},

	origins: String,
	name:String


});



//Definimos el modelo

let Application = mongoose.model("Application",applicationSchema);

module.exports = Application;