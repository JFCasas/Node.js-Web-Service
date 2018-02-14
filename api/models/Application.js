const mongoose = require("mongoose");

const randomstring = require("randomstring")

function assignRandomAndUniqueValueToField(app,field,next){

	const randomString = randomstring.generate(20)

	let searchCriteria = {}

	searchCriteria[field] = randomString

	Application.count(searchCriteria).then(count=>{

		if( count > 0 ){

			return assignRandomAndUniqueValueToField(app,field,next)

		}else{

			app[field] = randomString
			next()
		} 
	})
}

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

applicationSchema.pre('validate',function(next){

	assignRandomAndUniqueValueToField(this,'applicationID',()=>{

		assignRandomAndUniqueValueToField(this,'secret',next)
	})
})

//Definimos el modelo

let Application = mongoose.model("Application",applicationSchema);

module.exports = Application;