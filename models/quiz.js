var mongoose = require('mongoose')

var quizSchema = mongoose.Schema({
	language   : String,
	passed :  {type: Boolean, default: false},
	questions : [{ type: mongoose.Schema.ObjectId, ref : 'question'}], 
})

var questionSchema = mongoose.Schema({
	correct : {type: Boolean, default: false},
	answer  : String, 
	question : String, 
})

var Question = mongoose.model('question', questionSchema);
var Quiz = mongoose.model('quiz', quizSchema);

module.exports = {
	quiz: Quiz,
	question: Question
}