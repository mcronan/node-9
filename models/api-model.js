var googleTranslate = require('google-translate')('AIzaSyCjfjtLnq2WNcOuHkeLn8fgcLf0_iEehcQ');

var translate = googleTranslate.translate(word, lang, function(err, translation) {
    res.send(translation.translatedText);
});

module.exports = {
	translate: translate
}