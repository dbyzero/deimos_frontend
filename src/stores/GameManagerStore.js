var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
	'serverList':{},
	'reduce':false,
	'onGame':null
};

// App store
var state;
var GameManagerStore = Reflux.createStore({
	listenables: AppActions,

	getInitialState:function () {
		return INITIAL_STATE;
	},

	init:function () {
		console.log(__filename + ' init ' + arguments);
		state = INITIAL_STATE;
	},

	onGameManagerToggle: function() {
		console.log(__filename + ' onGameManagerToggle '+arguments)
		state.reduce = !state.reduce;
		this.trigger(state);
	},

	onGameFillServerList: function(list) {
		console.log(__filename + ' onGameFillServerList '+list)
		state.serverList = list;
		this.trigger(state);
	},

	onGameJoinServer: function(port) {
		console.log(__filename + ' onGameJoinServer '+port)
		state.onGame = port;
		this.trigger(state);
	},

	onGameLeaveServer: function(port) {
		console.log(__filename + ' onGameLeaveServer '+port)
		state.onGame = null;
		this.trigger(state);
	},

	onLoggout: function(port) {
		console.log(__filename + ' onLoggout '+port)
		resetStore();
	}
});

var resetStore = function() {
	state.onGame = null;
	GameManagerStore.trigger(state);
}

module.exports = GameManagerStore;