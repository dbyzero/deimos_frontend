var Reflux = require('reflux');
var Config = require('../../Config');
var io = require('socket.io-client');

// Test actions
var Actions = Reflux.createActions([
	"init",
	"connect",
	"connected",
	"loggued",
	"login",
	"loggout",
	"loginFormToggle",
	"serverError",
	"gameCreateServer",
	"gameManagerToggle",
	"gameJoinServer",
	"gameStartServer",
	"gameStopServer",
	"gameDestroyServer",
	"gameLeaveServer",
	"gameFillServerList",
	"gameCleanGameArea",
	"chatSendMessage",
	"chatHasNewMessage",
	"chatInit",
	"chatHasNewUserList",
	"chatToggle"
]);

var wsConnection = null;
var sessionid = null;
var username = null;
var GAME_CONTAINER_DOM_ID = 'gamezone';

Actions.connect.listen(function () {
	console.log( __filename + ' connect ' + arguments );
	if(wsConnection !== null) {
		wsConnection.connect();
	} else {
		wsConnection = io.connect(Config.serverURL);
		wsConnection.emit('loggout',sessionid);
		wsConnection
			//General purpose
			.on('connect',function(){
				Actions.connected();
			})
			.on('connect_error',Actions.disconnected)
			.on('loggued',function(data){
				Actions.loggued(data);
			})
			.on('serverError',function(data){
				Actions.serverError(data);
			})

			//Chat purpose
			.on('chat.welcome',Actions.chatInit)
			.on('chat.message',Actions.chatHasNewMessage)
			.on('chat.newUserList',Actions.chatHasNewUserList)

			//Game purpose
			.on('game.serverList',Actions.gameFillServerList)
	}
});

/*****************
 * Global actions
 ****************/

Actions.loggout.listen(function () {
	console.log( __filename + ' loggout ' );
	Actions.gameCleanGameArea();
	wsConnection.emit('loggout',sessionid);
	// delete wsConnection;
});

Actions.connected.listen(function () {
	console.log( __filename + ' connected ' + arguments );
});

Actions.login.listen(function (login,password) {
	console.log( __filename + ' login ' );
	wsConnection.emit('login',{data:{'login':login,'password':password}});
});

Actions.loginFormToggle.listen(function () {
	console.log( __filename + ' loginFormToggle ' );
});

Actions.loggued.listen(function (data) {
	console.log( __filename + ' loggued ' );
	sessionid = data.sessionid;
	username = data.login;
});

Actions.serverError.listen(function (data) {
	console.log( __filename + ' serverError ' );
	alert(data.message);
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

Actions.gameCreateServer.listen(function (msg) {
	console.log( __filename + ' gameTest2 ' + msg );
	wsConnection.emit('game.test2',{data:msg});
});

Actions.gameFillServerList.listen(function (list) {
	console.log( __filename + ' disconnected ' + arguments );
});

Actions.gameDestroyServer.listen(function (serverName) {
	console.log( __filename + ' gameDestroyServer ' + arguments );
	wsConnection.emit('game.destroyServer',{data:{'serverName':serverName}});
});

Actions.gameJoinServer.listen(function (port) {
	console.log( __filename + ' gameJoinServer ' + arguments );

	//create arena
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
	div.setAttribute('id',GAME_CONTAINER_DOM_ID);
	document.getElementsByTagName('body')[0].appendChild(div);

	//join game
	var config = {
		serverURL : Config.gameServerDomain,
		serverPort : port,
		serverAssetURL : Config.assetURL,
		sessionId : sessionid
	};

	org.dbyzero.deimos.Engine.start(config);
});

Actions.gameStartServer.listen(function (serverName) {
	console.log( __filename + ' gameStartServer ' + serverName );
	wsConnection.emit('game.startServer',{data:{'serverName':serverName}});
});

Actions.gameLeaveServer.listen(function () {
	console.log( __filename + ' gameLeaveServer ');
	Actions.gameCleanGameArea();
});

Actions.gameStopServer.listen(function (serverName) {
	console.log( __filename + ' gameStopServer ' + serverName );
	wsConnection.emit('game.stopServer',{data:{'serverName':serverName}});
});

Actions.gameManagerToggle.listen(function () {
	console.log( __filename + ' chatToggle ' );
});

Actions.gameCleanGameArea.listen(function () {
	console.log( __filename + ' gameCleanGameArea ' );
	org.dbyzero.deimos.Engine.stop();
	var gamezone = document.getElementById(GAME_CONTAINER_DOM_ID);
	if(gamezone) gamezone.parentNode.removeChild(gamezone);
});

module.exports = Actions;