var mongoose = require("mongoose");

const dbName = "places_api"

module.exports = {

	connect: ()=> mongoose.connection.openUri("mongodb://localhost/" +  dbName),

	dbName : dbName,

	connection: ()=> {

		if(monggose.connection){

			return mongoose.connection
		}

		return this.connect()
	}
}