var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var quizModel = require('../models/quiz')

var apiController = {
	apiTranslate: function(req, res) {
		var translateValue = req.body
		googleTranslate.translate(translateValue.resultWord, translateValue.toLang, function(err, translation) {
 
     	res.send(translation.translatedText);
		})
	},

	apiQuiz: function(req, res) {
		var Quiz = quizModel.quiz;
		var language = req.body.language;

		var newQuiz = new Quiz({
			language: language
		});

		newQuiz.save(function(err, doc) {
			res.send(doc);
		});
	},

	apiQuestion: function(req, res) {
		var body = req.body;
		res.send({
			question: body.question,
			answer: body.answer
		})
	}

};


module.exports = apiController;