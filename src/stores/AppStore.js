var Reflux = require('reflux');
var Config = require('../../Config');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
	'serverURL' : Config.serverURL,
	'isConnected' : false,
	'isAuth' : false,
	'account' : null,
	'hideLoginForm' : false,
	'sessionID' : null
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

	onDisconnected: function() {
		console.log(__filename + ' onDisconnected '+arguments)
		state.isConnected = false;
		state.isAuth = false;
		state.hideLoginForm = false;
		this.trigger(state);
	},

	onLoggued: function(data) {
		state.sessionID = data.sessionid;
		state.account = data.login;
		state.isAuth = true;
		state.hideLoginForm = true;
		this.trigger(state);
	},

	onLoggout: function(sessionid) {
		resetStore();
		state.isAuth = false;
		state.hideLoginForm = false;
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