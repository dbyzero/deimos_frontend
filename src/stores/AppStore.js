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