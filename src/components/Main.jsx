var React = require('react');
var Reflux = require('reflux');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions.js');

var Chat = require('./Chat');

//metrics to notify a changement

var Main = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<Chat 
				isConnected={this.state.isConnected}
				onChatToggle={onChatToggle}
				onSendMessage={onChatSendMessage.bind(this)}
				onClickConnect={onClickConnect.bind(this)}
				onClickDisconnect={onClickDisconnect.bind(this)}
			/>
		);
	}
});

var onChatSendMessage = function(msg) {
	console.log(__filename + ' onSendMessage '+ msg);
	AppActions.chatSendMessage(msg);
}

var onChatToggle = function() {
	AppActions.chatToggle();
}

var onClickConnect = function() {
	AppActions.connect();
}

var onClickDisconnect = function() {
	AppActions.disconnect();
}

module.exports = Main;