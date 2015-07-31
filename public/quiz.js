$(document).on('ready', function () {

 	$('#submit-quiz').on('click', function() {
 		$('.hide').show();
 	});

 	var wordArray = [
		'perigynous',
		'crimmer',
		'nonclastic',
		'gluepot',
		'tesseract',
		'neap',
		'nonsolidifying',
		'subestuarine',
		'thyiads',
		'thalweg'
	];

    var questionCounter = 0;
	var random = _.sample(wordArray)
	$('#randomWord').text(random)

    	// for part II - quiz
	 $('#submit-quiz').on('click', function(){
	 	
		$.ajax({
			method   : 'post',
			url      : 'api/quiz',
			data     :  {
				language: $('#quiz-lang').val()
			},
			success	 : function(resData) {
				console.log(resData);
				$('.hide-id').text(resData._id);
			}
		})
	 });



	 $('#submit-word').on('click', function() {
	 	
		$.ajax({
			method   : 'post',
			url      : 'api/quiz/question',
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