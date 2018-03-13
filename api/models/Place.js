const mongoose = require("mongoose");

const slugify = require("../plugins/slugify")

let mongoosePaginate = require("mongoose-paginate")

let Visit = require('./Visit');

let Schema = mongoose.Schema;


let placeSchema = new Schema({

	title: {type:String, required:true},
	description: String,
	acceptsCreditCard: {type:Boolean, default:false},
	coverImage: String,
	avatarImage: String,
	openHour: Number,
	closeHour: Number,
	slug: {type:String, unique:true},

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User",required:true}


	
});

placeSchema.pre('save',function(next){

	this.slug = slugify(this.title)

	this.coverImage = this.coverImage.split('\\')[1]

	this.avatarImage = this.avatarImage.split('\\')[1]

	next()
})

placeSchema.plugin(mongoosePaginate)


placeSchema.virtual('visits').get(function(){

	return Visit.find({'_place':this._id}).sort('-id')

	/*return Visit.find({'_place':this._id}).sort('-id')

		.then((visits)=>{

			return visits

			
		})*/

})


//Definimos el modelo

let Place = mongoose.model("Place",placeSchema);

module.exports = Place;