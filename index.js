var request = require('request');

var dogSpeak = function(emotion){
	var messages = {
		happy: ['woof woof woof', 'thanks for the petting!'],
		sad: ['would someone rub my belly :(?', "woof i'm lonely"],
		loud: ['can everyone quiet down?  i\'m trying to work', 'you\'re violating the 2ft rule!']
	};

	var token = 'xoxp-2151814398-6097825239-9153673765-b0d2f8';
	// var token = 'xoxp-3494348448-3499952507-9151203574-b21392'; //practice
	var sendUser = ['%40zekenie', '%40omibear', '%40griffin', '%23general'];

	var message = 'testing123';
	var url = 'https://slack.com/api/chat.postMessage?token=' + token + '&channel='+ sendUser + '&text=' + message + '&username=patrick-the-dog&icon_url=http%3A%2F%2Fi.imgur.com%2FVxXj1fe.jpg&pretty=1';
	request.post(url);
};

module.exports = dogSpeak;
