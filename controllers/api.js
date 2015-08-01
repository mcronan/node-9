var googleApi = require('../googleapi');

// var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');
var quizModel = require('../models/quiz');
//var api = require('../models/api-model');

// part I
var apiController = {
	apiTranslate: function(req, res) {
		var translateValue = req.body;
		googleApi.googleTranslate.translate(translateValue.resultWord, translateValue.toLang, function(err, translation) {
     		res.send(translation.translatedText);
		});
	},

// part II
	apiQuiz: function(req, res) {
		var Quiz = quizModel.quiz;
		var language = req.body.language;
		// create a new model
		var newQuiz = new Quiz({
			language: language
		});

		// saves model and sends document to 
		// client 
		newQuiz.save(function(err, doc) {
			res.send(doc);
		});
	},
// mongo shell only showing quizzes as collections, not questions
	apiQuestion: function(req, res) {
		var Quiz = quizModel.quiz;
		var Question = quizModel.question;
		var quizID = req.body.quizID;

		var newQuestion = new Question({
			question: req.body.question,
			answer: req.body.answer,
			correct: function() {
				// can use req.body.language here?
				googleApi.googleTranslate.translate(req.body.answer, /* Quiz Lang */ function(err, translation) {
     				res.send(translation.translatedText);
				});
			}
		});

		// finding the quiz with the quizID as before 
		Quiz.findOne({_id: quizID}, function(err, doc) {
			// pushing in new question into quiz array
			doc.questions.push(newQuestion);
			doc.save(function(err, doc){
				res.send(doc);
			});
		});
	}

};


module.exports = apiController;