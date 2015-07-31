 $(document).on('ready', function () {

 	$('.hide').hide()
 	$('#submit-quiz').on('click', function() {
 		$('.hide').show()
 	})

 	// for part I - translator
	$('#submit-translation').on('click', function(e) {
		//e.preventDefault()
		console.log('Button clicked on client!');

		var translation = {
			fromLang   : $('#fromLang').val(),
			toLang     : $('#toLang').val(),
			resultWord : $('#finalWord').val()
		}

		$.ajax({
			// reserved words for ajax
			method  : 'post',
			url     : '/api/translate',
			data    :  translation,
			success : function( data ) {
			$('.resultBox p').text(data) 
			}
		});

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
	]

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
			}
		})
	 })

	var random = _.sample(wordArray)
	$('#randomWord').text(random)

	 $('#submit-word').on('click', function(){
	 	
		$.ajax({
			method   : 'post',
			url      : 'api/quiz/question',
			data     :  {
				question: $('#randomWord').text(),
				answer: $('#guessedWord').val()
			},
			success: function(resData) {

			}
		})
	 })




}); // End Ready