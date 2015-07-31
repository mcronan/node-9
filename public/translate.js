 $(document).on('ready', function () {

 	// for part I - translator
	$('#submit-translation').on('click', function(e) {
		e.preventDefault();

		$.ajax({
			// reserved words for ajax
			method  : 'POST',
			url     : '/api/translate',
			data    :  $('#translate-form').serialize(),
			success : function( data ) {
				$('.resultBox p').text(data);
			}
		});
	});

}); // End Ready