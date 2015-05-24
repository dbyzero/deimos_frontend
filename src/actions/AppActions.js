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
	"gameTest1",
	"gameTest2",
	"gameTest3",
	"gameTest4",
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

Actions.gameTest1.listen(function (msg) {
	console.log( __filename + ' gameTest1 ' + msg );
	wsConnection.emit('game.test1',{data:msg});

})
Actions.gameTest2.listen(function (msg) {
	console.log( __filename + ' gameTest2 ' + msg );
	wsConnection.emit('game.test2',{data:msg});

})
Actions.gameTest3.listen(function (msg) {
	console.log( __filename + ' gameTest3 ' + msg );
	wsConnection.emit('game.test3',{data:msg});

});
Actions.gameTest4.listen(function (varargs) {
	console.log( __filename + ' gameTest4 ' + arguments );
	var div = document.createElement('div');
	div.style.width = '675px';
	div.style.height = '500px';
	div.style.overflow =' hidden';
	div.style.border = '2px solid black';
	div.style.position = 'fixed';
	div.style.zIndex = '1024';
	div.style.top = '170px';
	div.style.left = '10px';
	div.style.backgroundColor = '#fff';
	div.attr = '#fff';
	div.setAttribute('id','gamezone');
	console.log(div);
	document.getElementsByTagName('body')[0].appendChild(div);

});

module.exports = Actions;