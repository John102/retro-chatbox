function sendMessage() {

	var datum		=	new Date();
	var uur			=	datum.getHours();
	var minuut		=	datum.getMinutes();
	var seconde		=	datum.getSeconds();

	var message 		=	document.getElementById('chat-input').value;
	var messageHistory	=	document.getElementById('window').innerHTML;

	if(uur < 10) {
		uur = '0' + uur;
	}
	if(minuut < 10) {
		minuut = '0' + minuut;
	}
	if(seconde < 10) {
		seconde = '0' + seconde;
	}

	if(message === '') {
		return messageHistory;
	} else {
		// Reset Chat Input
		document.getElementById('chat-input').value = '';
		// Refocus Chat Input
		document.getElementById('chat-input').focus();
		// Update Message Window
		return document.getElementById('window').innerHTML = messageHistory +  
		'[' + uur + ':' + minuut + ':' + seconde + '] : ' + message + '<br />';
	}
};