var Reflux = require('reflux');
var Config = require('../../Config');
var io = require('socket.io-client');

// Test actions
var Actions = Reflux.createActions([
	"init",
	"connect",
	"disconnect",
	"connected",
	"disconnected",
	"chatSendMessage",
	"chatHasNewMessage",
	"chatInit",
	"chatHasNewUserList",
	"chatToggle"
]);

var wsConnection = null;

Actions.init.listen(function(){
	Actions.connect();
});

Actions.connect.listen(function () {
	console.log( __filename + ' connect ' + arguments );
	if(wsConnection !== null) {
		wsConnection.connect();
	} else {
		wsConnection = io.connect(Config.serverUrl);
		wsConnection
			//General purpose
			.on('connect',function(){
				Actions.connected();
			})
			.on('connect_error',Actions.disconnected)

			//Chat purpose
			.on('chat.welcome',Actions.chatInit)
			.on('chat.message',Actions.chatHasNewMessage)
			.on('chat.newUserList',Actions.chatHasNewUserList)

			//Game purpose
			.on('game.welcome',function(data){
			})
	}
});

/*****************
 * Global actions
 ****************/

Actions.disconnect.listen(function () {
	console.log( __filename + ' disconnect ' + arguments );
	if((wsConnection !== null) && wsConnection.connected === true) {
		wsConnection.disconnect();
		Actions.disconnected();
	}
});

Actions.connected.listen(function () {
	console.log( __filename + ' connected ' + arguments );
});

Actions.disconnected.listen(function () {
	console.log( __filename + ' disconnected ' + arguments );
});

/****************
 * Chat actions
 ***************/

Actions.chatSendMessage.listen(function ( msg ) {
	console.log( __filename + ' chatSendMessage ' + msg );
	wsConnection.emit('chat.message',{data:msg});

});

Actions.chatHasNewMessage.listen(function (data) {
	console.log( __filename + ' chatHasNewMessage ' + data );
});

Actions.chatInit.listen(function (data) {
	console.log( __filename + ' chatInit ' + data );
});

Actions.chatHasNewUserList.listen(function (data) {
	console.log( __filename + ' chatHasNewUserList ' );
});

Actions.chatToggle.listen(function () {
	console.log( __filename + ' chatToggle ' );
});

/****************
 * Game actions
 ***************/

module.exports = Actions;