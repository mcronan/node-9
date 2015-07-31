var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var quizModel = require('../models/quiz')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res) {
		res.render('translate');
	},
	
	quiz: function(req, res) {
		res.render('quiz')
	}

};


module.exports = indexController;