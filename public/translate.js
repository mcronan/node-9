$(document).on('ready', function () {

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

}); // End Ready