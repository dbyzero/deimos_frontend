var Reflux = require('reflux');
var Config = require('../../Config');
var io = require('socket.io-client');
var base64 = require('base64-url');
var Client = require('../client/Engine.js');

// Test actions
var Actions = Reflux.createActions([
	"init",
	"connected",
	"disconnected",
	"loggued",
	"login",
	"loggout",
	"register",
	"createCharacter",
	"mainContainerToggle",
	"serverError",
	"askCookie",
	"setCookie",
	"getSessionInfoCookie",
	"setCharacterSelected",
	"cleanCookie",
	"sendMessageToIFrame",
	"receiveMessageFromIFrame",
	"avatarCreated",

	/** STATE **/
	"changeState",
	"showLoginForm",
	"showRegisterForm",
	"showHomeScreen",
	"showCreateCharacterForm",
	"showJoinPartyScreen",
	"showCreatePartyScreen",
	"showIngameScreen",
	"showCharacterSheetScreen",

	"gameManagerToggle",
	"gameJoinServer",
	"gameStartServer",
	"gameStopServer",
	"gameDestroyServer",
	"gameLeaveServer",
	"gameFillServerList",
	"gameCleanGameArea",
	"gameInitLevel",
	"gameReadyToJoin"
]);

var wsConnection = null;
var sessionid = null;
var username = null;
var currentAvatarSelected = null;
var GAME_CONTAINER_DOM_ID = 'gamezone-'+Date.now()+parseInt(Math.random()*10000000000000);
var TOKEN_SECRET = 'c2Vzc2lvbmlkIjoiNjY0ZTk2NGU0M';
var SESSION_COOKIE_KEY = 'sessioninfo';

Actions.init.listen(function () {
	console.log( __filename + ' connect ' + arguments );
	if(wsConnection !== null) {
		wsConnection.connect();
	} else {
		wsConnection = io.connect(Config.serverURL);
		if(wsConnection.connected) {
			wsConnection.e
			mit('loggout',sessionid);
		}
		wsConnection
			//General purpose
			.on('connect',Actions.connected)
			.on('loggued',Actions.loggued)
			.on('disconnect',Actions.disconnected)
			.on('sessionRevoked',function(data){
				Actions.loggout();
				Actions.cleanCookie(SESSION_COOKIE_KEY);
			})
			.on('serverError',Actions.serverError)
			.on('avatarCreated',Actions.avatarCreated)

			//Game purpose
			.on('game.serverList',Actions.gameFillServerList)
			.on('game.readyToJoinGame',Actions.gameReadyToJoin)
	}

	//we listen return from iFrame
	window.addEventListener("message", Actions.receiveMessageFromIFrame, false);
});

/*****************
 * Global actions
 ****************/

Actions.disconnected.listen(function () {
	console.log( __filename + ' disconnected ' );
	Actions.gameCleanGameArea();
});

Actions.loggout.listen(function () {
	console.log( __filename + ' loggout ' );
	Actions.gameCleanGameArea();
	wsConnection.emit('loggout',sessionid);
	Actions.cleanCookie();
});

Actions.register.listen(function (login,password,mail) {
	console.log( __filename + ' register ' );
	wsConnection.emit('register',{'data':{'login':login,'password':password,'mail':mail}});
});

Actions.createCharacter.listen(function (data) {
	console.log( __filename + ' createCharacter ' );
	data['account_name'] = username;
	wsConnection.emit('createCharacter',{'data':data});
});

Actions.connected.listen(function () {
	console.log( __filename + ' connected ' + arguments );
	Actions.askCookie();
});

Actions.login.listen(function (login,password) {
	console.log( __filename + ' login ' );
	wsConnection.emit('login',{'data':{'login':login,'password':password}});
});

Actions.mainContainerToggle.listen(function () {
	console.log( __filename + ' mainContainerToggle ' );
});

Actions.loggued.listen(function (data) {
	console.log( __filename + ' loggued ' );
	sessionid = data.sessionid;
	username = data.login;
	var currentAvatarSelected = null;
	if(data.characters && data.characters.length > 0) {
		currentAvatarSelected = data.characters[0].id;
	}
	Actions.setCookie(username,sessionid,currentAvatarSelected);
});

Actions.serverError.listen(function (data) {
	console.log( __filename + ' serverError ' );
	alert(JSON.stringify(data.message));
});

Actions.askCookie.listen(function(message) {
	Actions.sendMessageToIFrame({'action':'get','key':SESSION_COOKIE_KEY});
});

Actions.getSessionInfoCookie.listen(function(sessionInfoRaw) {
	try {
		// console.log(sessionInfoRaw);
		var sessioninfo = JSON.parse(sessionInfoRaw);
		if(sessioninfo && sessioninfo.sessionid && sessioninfo.username) {
			wsConnection.emit('loginBySessionId',{data:{'login':sessioninfo.username,'sessionid':sessioninfo.sessionid}});
		}
		Actions.setCharacterSelected(sessioninfo.currentAvatarSelected || null);
	} catch(err) {
		console.error(err);
		console.error('Cannot get session info cookie');
		Actions.loggout();
	}
});

Actions.setCookie.listen(function(username,sessionid,currentAvatarSelected) {
	Actions.sendMessageToIFrame({
		'action':'set',
		'key':SESSION_COOKIE_KEY,
		'value':base64.encode(base64.encode('{"username":"'+username+'", "sessionid":"'+sessionid+'", "currentAvatarSelected":"'+currentAvatarSelected+'"}')+TOKEN_SECRET)
	});
});

Actions.setCharacterSelected.listen(function(_currentAvatarSelected) {
	Actions.setCookie(username,sessionid,_currentAvatarSelected);
	currentAvatarSelected = _currentAvatarSelected;
});

Actions.cleanCookie.listen(function() {
	Actions.sendMessageToIFrame({
		'action':'clean',
		'key':SESSION_COOKIE_KEY
	});
});

Actions.sendMessageToIFrame.listen(function(message) {
	var iFrame = document.getElementById('puck_iframe_credentials');
	iFrame.contentWindow.postMessage(message,Config.serverURL);
});

Actions.receiveMessageFromIFrame.listen(function(event) {
	if(event.origin !== Config.serverURL) return;
	var value = event.data.value ? base64.decode(base64.decode(event.data.value).slice(0,-1*TOKEN_SECRET.length)) : null;
	if(event.data.key === SESSION_COOKIE_KEY && value && value.length > 0) {
		Actions.getSessionInfoCookie(value);
	}
});

Actions.showLoginForm.listen(function(event) {
	Actions.changeState("LoginForm");
});

Actions.showRegisterForm.listen(function(event) {
	Actions.changeState("RegisterForm");
});

Actions.showHomeScreen.listen(function(event) {
	Actions.changeState("HomeScreen");
});

Actions.showCreateCharacterForm.listen(function(event) {
	Actions.changeState("CreateCharacterForm");
});

Actions.showJoinPartyScreen.listen(function(event) {
	Actions.changeState("JoinPartyScreen");
});

Actions.showCreatePartyScreen.listen(function(event) {
	Actions.changeState("CreatePartyScreen");
});

Actions.showIngameScreen.listen(function(event) {
	Actions.changeState("IngameScreen");
});

Actions.showCharacterSheetScreen.listen(function(event) {
	Actions.changeState("CharacterSheetScreen");
});

/****************
 * Game actions
 ***************/

Actions.gameFillServerList.listen(function (list) {
	console.log( __filename + ' disconnected ' + arguments );
});

Actions.gameDestroyServer.listen(function (serverName) {
	console.log( __filename + ' gameDestroyServer ' + arguments );
	wsConnection.emit('game.destroyServer',{data:{'serverName':serverName}});
});

Actions.gameJoinServer.listen(function (game) {
	console.log( __filename + ' gameJoinServer ' + game );
	wsConnection.emit('game.joinServer', {'data':{'serverName':game}});
});

Actions.gameReadyToJoin.listen(function (gameInfo) {
	console.log( __filename + ' gameReadyToJoin ' + gameInfo );
	// console.log(gameInfo);
	var gameConfig = {
		"serverURL" : Config.gameServerDomain,
		"serverPort" : gameInfo.message.serverPort
	};
	Client.start(gameConfig);
});

Actions.gameLeaveServer.listen(function () {
	console.log( __filename + ' gameLeaveServer ');
	Actions.gameCleanGameArea();
});

Actions.gameManagerToggle.listen(function () {
	console.log( __filename + ' gameManagerToggle ' );
});

Actions.gameCleanGameArea.listen(function () {
	console.log( __filename + ' gameCleanGameArea ' );
	// Client.stop();
	// var gamezone = document.getElementById(GAME_CONTAINER_DOM_ID);
	// if(gamezone) gamezone.parentNode.removeChild(gamezone);
});

Actions.gameStartServer.listen(function (serverName) {
	console.log( __filename + ' gameStartServer ' + serverName );
	wsConnection.emit('game.startServer',{data:{'serverName':serverName}});
});

Actions.gameStopServer.listen(function (serverName) {
	console.log( __filename + ' gameStopServer ' + serverName );
	wsConnection.emit('game.stopServer',{data:{'serverName':serverName}});
});

module.exports = Actions;
