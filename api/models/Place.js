const mongoose = require("mongoose");

const slugify = require("../plugins/slugify")

let mongoosePaginate = require("mongoose-paginate")

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

	next()
})

placeSchema.plugin(mongoosePaginate)


//Definimos el modelo

let Place = mongoose.model("Place",placeSchema);

module.exports = Place;