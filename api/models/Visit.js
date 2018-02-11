const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate")


let Schema = mongoose.Schema;

const REACTIONS = ['like','love','disappointment','yummy','anger','disgust']


let visitSchema = new Schema({

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User",required:true},
	_place: {type: mongoose.Schema.Types.ObjectId, ref: "Place",required:true},
	observation: String,
	reaction:{

		type: String,
		enum: REACTIONS
	}


});

visitSchema.plugin(mongoosePaginate)


//Definimos el modelo

let Visit = mongoose.model("Visit",visitSchema);

module.exports = Visit;