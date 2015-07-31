var mongoose = require('mongoose')


// Schema definition
var superHeroSchema = mongoose.Schema({
	// this is just saying that name will be a string
	name         :  String,
	// this will be an array where each element is a string
	superPowers  : [{ type: String }]
	cape:         : Boolean

})

// Create the model and collection for SuperHeroes 
var SuperHeroes = mongoose.model('superheroes', superHeroSchema)

module.exports = 