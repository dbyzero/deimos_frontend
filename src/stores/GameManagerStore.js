var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
	'serverList':{},
	'reduce':true
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

	onDisconnected: function() {
		console.log(__filename + ' onDisconnect '+arguments)
		this.trigger(state);
	},

	onGameManagerToggle: function() {
		console.log(__filename + ' onGameManagerToggle '+arguments)
		state.reduce = !state.reduce;
		this.trigger(state);
	},

	onFillServerList: function(list) {
		console.log(__filename + ' onFillServerList '+list)
		state.serverList = list;
		this.trigger(state);
	},
});

module.exports = GameManagerStore;