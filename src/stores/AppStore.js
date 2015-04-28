var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
	'username':'n/a',
	'isConnected' : false,
	'messages': [],
	'socket': null,
	'channel':'',
	'reduce':true,
	'users':[]
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

	onConnected: function(socket) {
		console.log(__filename + ' onConnect '+arguments)
		state.isConnected = true;
		state.socket = socket;
		this.trigger(state);
	},

	onDisconnected: function() {
		console.log(__filename + ' onDisconnect '+arguments)
		state.isConnected = false;
		state.username = "n/a";
		state.channel = "n/a";
		state.users = [];
		this.trigger(state);
	},

	onAddMessage: function(data) {
		console.log(__filename + ' addMessage '+arguments)
		state.messages.push(data);
		this.trigger(state);
	},

	onSetEnv: function(data) {
		console.log(__filename + ' onSetEnv '+arguments)
		state.username = data.username;
		state.channel = data.channel;
		state.users = data.users;
		this.trigger(state);
	},

	onToggleReduce: function() {
		console.log(__filename + ' onToggleReduce '+arguments)
		state.reduce = !state.reduce;
		this.trigger(state);
	},

	userDisconnected: function(data) {
		console.log(__filename + ' userDisconnected '+arguments)
		state.users = data.newList;
		this.trigger(state);
	}
});

module.exports = AppStore;