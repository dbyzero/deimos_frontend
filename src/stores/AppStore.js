var Reflux = require('reflux');
var Config = require('../../Config');

var AppActions = require('../actions/AppActions.js');

// var APP_STATE = [
// 	'LoginForm',
// 	'RegisterForm',
// 	'HomeScreen',
// 	'CreateCharacterForm',
// 	'JoinPartyScreen',
// 	'CreatePartyScreen',
// 	'IngameScreen',
// 	'CharacterSheetScreen'
// ];

var INITIAL_STATE = {
	'serverURL' : Config.serverURL,
	'isConnected' : false,
	'isAuth' : false,
	'account' : null,
	'sessionID' : null,
	'characters' : [],
	'isHidden' : false,
	'showInventory' : false,
	'currentAvatarSelected' : null
};

// App store
var state;
var AppStore = Reflux.createStore({
	listenables: AppActions,

	getInitialState:function () {
		return INITIAL_STATE;
	},

	init:function () {
		console.log(__filename + ' init ' + arguments);
		state = INITIAL_STATE;
	},

	onConnected: function() {
		console.log(__filename + ' onConnect '+arguments)
		state.isConnected = true;
		this.trigger(state);
	},

	onMainContainerToggle: function() {
		console.log(__filename + ' onMainContainerToggle '+arguments)
		state.isHidden = !state.isHidden;
		this.trigger(state);
	},

	getCurrentAvatar: function() {
		for (var i = 0; i < state.characters.length; i++) {
			if(state.characters[i].id == state.currentAvatarSelected) {
				return state.characters[i];
			}
		}
		throw new Error('Cannot find avatar selected with id '+state.currentAvatarSelected);
	},

	onDisconnected: function() {
		console.log(__filename + ' onDisconnected '+arguments)
		state.isConnected = false;
		state.isAuth = false;
		this.trigger(state);
	},

	onLoggued: function(data) {
		state.sessionID = data.sessionid;
		state.account = data.login;
		state.characters = data.characters;
		//select first char by default
		if(state.characters.length > 0 && state.currentAvatarSelected == null) {
			state.currentAvatarSelected = state.characters[0].id;
		}
		state.appState = 'HomeScreen';
		state.isAuth = true;
		this.trigger(state);
	},

	onLoggout: function(sessionid) {
		resetStore();
		state.appState = 'LoginForm';
		state.isAuth = false;
		this.trigger(state);
	},

	onChangeState: function(stateScreen) {
		if(stateScreen === 'CharacterSheetScreen') {
			state.showInventory = true;
		} else {
			state.showInventory = false;
		}
		state.appState = stateScreen;
		this.trigger(state);
	},

	onAvatarCreated: function(data) {
		if(state.appState === 'CreateCharacterForm') {
			state.appState = 'HomeScreen';
		}
		var avatar = data.avatar;
		state.characters.push(avatar);
		state.currentAvatarSelected = avatar.id;
		this.trigger(state);
	},

	onSetCharacterSelected: function(charId) {
		state.currentAvatarSelected = charId;
		this.trigger(state);
	}
});

var resetStore = function() {
	state.sessionID = null;
	state.account = null;
	state.isAuth = false;
	AppStore.trigger(state);
}

module.exports = AppStore;