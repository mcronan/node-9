var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quizDb')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get('/quiz', indexController.quiz)

app.post('/api/translate', apiController.apiTranslate)
app.post('/api/quiz', apiController.apiQuiz)
app.post('/api/quiz/question', apiController.apiQuestion)


var server = app.listen(8322, function() {
	console.log('Express server listening on port ' + server.address().port);
});
