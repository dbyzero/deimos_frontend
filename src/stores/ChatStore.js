var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
	'username':'n/a',
	'messages': [],
	'channel':'n/a',
	'reduce':true,
	'users':[]
};

// App store
var state;
var ChatStore = Reflux.createStore({
	listenables: AppActions,

	getInitialState:function () {
		return INITIAL_STATE;
	},

	init:function () {
		console.log(__filename + ' init ' + arguments);
		state = INITIAL_STATE;
	},

	onChatHasNewMessage: function(data) {
		console.log(__filename + ' onChatHasNewMessage '+arguments)
		state.messages.push(data);
		this.trigger(state);
	},

	onChatInit: function(data) {
		console.log(__filename + ' onChatInit '+arguments)
		state.username = data.username;
		state.channel = data.channel;
		state.users = data.users;
		this.trigger(state);
	},

	onChatToggle: function() {
		console.log(__filename + ' onChatToggle '+arguments)
		state.reduce = !state.reduce;
		this.trigger(state);
	},

	onChatHasNewUserList: function(data) {
		console.log(__filename + ' onChatHasNewUserList '+arguments)
		state.users = data.newList;
		this.trigger(state);
	},

	onLoggout: function(sessionid) {
		console.log(__filename + ' onDisconnect '+arguments)
		resetStore();
	}
});

var resetStore = function() {
	state.username = "n/a";
	state.channel = "n/a";
	state.users = [];
	state.messages = [];
	ChatStore.trigger(state);
}

module.exports = ChatStore;