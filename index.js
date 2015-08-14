var request = require('request');

var messages = {
	happy: ['woof woof woof', 'thanks for the petting!'],
	sad: ['would someone rub my belly :(?', "woof i'm lonely"],
	loud: ['can everyone quiet down?  i\'m trying to work', 'you\'re violating the 2ft rule!']
};

var message = 'testing123';
var url = 'https://slack.com/api/chat.postMessage?token=xoxp-3494348448-3499952507-9151203574-b21392&channel=%23general&text=' + message + '&username=patrick-the-dog&icon_url=http%3A%2F%2Fi.imgur.com%2FVxXj1fe.jpg&pretty=1';
request.post(url);