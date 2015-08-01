 $(document).on('ready', function () {

 	// for part I - translator
	$('#submit-translation').on('click', function(e) {
		e.preventDefault();

		$.ajax({
			// reserved words for ajax
			method  : 'POST',
			url     : '/api/translate',
			// use serialize to shorten
			data    :  $('#translate-form').serialize(),
			// recieves the data from the server
			success : function( data ) {
				$('.resultBox p').text(data);
			}
		});
	});

}); // End Ready