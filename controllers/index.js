var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var quizModel = require('../models/quiz')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res) {
		res.render('translate');
	},

	apiTranslate: function(req, res) {
		var translateValue = req.body
		googleTranslate.translate(translateValue.resultWord, translateValue.toLang, function(err, translation) {
 
     	res.send(translation.translatedText);
		})
	},
	quiz: function(req, res) {
		// quizModel.random()
		res.render('quiz')
	}

	// apiQuiz: function(req, res) {
		
	// }
};



module.exports = indexController;