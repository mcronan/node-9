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

// collections
var Quiz = mongoose.model('quiz', quizSchema);
var Question = mongoose.model('question', questionSchema);

module.exports = {
	quiz: Quiz,
	question: Question
}