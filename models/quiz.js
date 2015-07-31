var mongoose = require('mongoose')

var quizSchema = mongoose.Schema({
	language   : String,
	passed :  Boolean,
	questions : [{ type: mongoose.Schema.ObjectId, ref : 'question'}], 
})

var questionSchema = mongoose.Schema({
	coorect : Boolean,
	answer  : String, 
	question : String, 
})

var Question = mongoose.model('question', questionSchema);

var Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz