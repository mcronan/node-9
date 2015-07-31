var SuperHeros = require('../models/superheros')

var superHeroController = {

	// Getting superheros from DB
	getHeros : function(req, res){

		SuperHeros.find({}, function(err, heroes){
			if (err) {
				res.send( {err : err } );
			}

			else {
				res.send({ data : heroes });
			}
		})
	},
	// Adding new superheros to DB

	createHero : function(req, res){


	}
}