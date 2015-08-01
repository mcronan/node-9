$(document).on('ready', function () {

 	$('#submit-quiz').on('click', function() {
 		$('.hide').show();
 	});

 	var wordArray = [
		'house',
		'cat',
		'boat',
		'farm',
		'going',
		'near',
		'far ',
		'computer',
		'country',
		'town'
	];

    var questionCounter = 0;
	var random = _.sample(wordArray)
	$('#randomWord').text(random)

    // everytime submit quiz is clicked, a new quiz
    // object is created
	 $('#submit-quiz').on('click', function(){
	 	
		$.ajax({
			method   : 'POST',
			url      : '/api/quiz',
			data     :  {
				language: $('#quiz-lang').val()
			},
			success	 : function(resData) {
				console.log(resData);
				// this is the object ID
				$('.hide-id').text(resData._id);
			}
		})
	 });

	 $('#submit-word').on('click', function() {
	 	
		$.ajax({
			method   : 'POST',
			// this url is arbitrary but must be consistent
			url      : '/api/quiz/question',
			data     :  {
				question: $('#randomWord').text(),
				answer: $('#guessedWord').val(),
				quizID: $('.hide-id').text()
			},
			success: function(resData) {
				console.log(resData);
			}
		});

		//reset the word
		// update counter

		// if counter = 10, ajax get to a route that redirects,
		// counter should get reset back to zero when the page refreshes
	 });


 }); // End Ready