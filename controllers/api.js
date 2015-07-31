var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var quizModel = require('../models/quiz');
//var api = require('../models/api-model');

var apiController = {
	apiTranslate: function(req, res) {
		var translateValue = req.body;
		googleTranslate.translate(translateValue.resultWord, translateValue.toLang, function(err, translation) {
     		res.send(translation.translatedText);
		});
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
		var Quiz = quizModel.quiz;
		var Question = quizModel.question;
		var quizID = req.body.quizID;

		var newQuestion = new Question({
			question: req.body.question,
			answer: req.body.answer,
			correct: function() {
				googleTranslate.translate(req.body.answer, /* Quiz Lang */, function(err, translation) {
     				res.send(translation.translatedText);
				});
			}
		});

		Quiz.findOne({_id: quizID}, function(err, doc) {
			doc.questions.push(newQuestion);
			doc.save(function(err, doc){
				res.send(doc);
			});
		});
	}

};


module.exports = apiController;