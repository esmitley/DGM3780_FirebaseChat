//This is where the JS magig happens

  // Add Ref to Firebase
	var messagesRef = new esclasschat.firebaseio.com

  // Register the Dom Elaments with jQuery
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#example-messages');

  // Listem for Enter press
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
		console.log ("PressingEnter")
		
		var username = nameField.val ();
		var message = messageField.val ();
		
      //save data to firebase and clear the message field
		messageRef.push ({name: name, text:message});
		messageField.val (' ');
    }
 });

  // Add a callback that is triggered for each chat message.
	ref.on('child_added', function(snapshot.preChildkey){	
});
      // get the data
	var newMessage = snapshot.val ();
		console.log(newMessage);
	var username = newMessage.name;

      // Create Elements for Message (<li> for messageElement and <strong class='example-chat-username'></strong> for nameElement)
	var messageElement = $(" <li>");
	var nameElement = $('<strong class='example-chat-username'></strong>')
	nameElement.text(username);
	messageElement.text(message).prepend(nameElement);

      // Add the message to messageList
	messageList.append(messageElement)
      //Scroll to bottom of MessageList
	messageList[0]scrollTop = messageList[0].scrollHeight;
});
