var theUser 		= 'parkerm34@email.arizona.edu';
var addChatLocation = 'http://www.justingiboney.com/cs337/classchat/control/addtochat.php';
var getChatLocation = 'control/postgetchat.php';



/* This function should grab the contents of the chat
 * input box, send them to the sendToChat function,
 * then, checking for a good post, erase the contents
 * of the chat input box. Alert the user if it doesn't
 * post well.
 */
function send() {
	var message = document.getElementById('chatinput').value;
	document.getElementById('chatinput').value = "";
	
	sendToChat(theUser, message, addChatLocation);
}

/* This function should post the user and the message
 * to the location provided.
 */
function sendToChat(theUser, theMessage, theLocation) {
	$.post(theLocation, {user: theUser, message: theMessage}, 
	function (returnedData) {
		alert("woo!");
	});
}

/* This function should grab the chat log every 2.5
 * seconds and display it on the chat screen.
 * 
 * It should display a div for every message:
 * user@email.arizona.edu (2014-03-06 12:21:08): My message
 */
function displayChatLog(theLocation) {
	$.post(theLocation, {}, function (returnedData) {
		var results = $.parseJSON(returnedData);
		$('#chatscreen').html('');
		$.each(results, function() {
			$("#chatscreen").append('<div class="message">' + this.user + ' (' + this.postdatetime + '): '+ this.message + '</div>');
		});
	});
}
