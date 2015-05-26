var React = require('react');
var Reflux = require('reflux');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Chat = require('./Chat');
var GameManager = require('./GameManager');

//metrics to notify a changement

var Main = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div>
				<button style={{'position':'absolute','bottom':'0px','left':'100px'}} onClick={AppActions.gameTest2}>TEST 2</button>
				<button style={{'position':'absolute','bottom':'50px','left':'0px'}} onClick={AppActions.gameTest4}>Make game area</button>
				<Chat 
					isConnected={this.state.isConnected}
					onChatToggle={AppActions.chatToggle}
					onSendMessage={onChatSendMessage.bind(this)}
					onClickConnect={onClickConnect.bind(this)}
					onClickDisconnect={onClickDisconnect.bind(this)}
				/>
				<GameManager
					onGameManagerToggle={AppActions.gameManagerToggle}
					isConnected={this.state.isConnected}
				/>
			</div>
		);
	}
});

var onChatSendMessage = function(msg) {
	console.log(__filename + ' onSendMessage '+ msg);
	AppActions.chatSendMessage(msg);
}

var onClickConnect = function() {
	AppActions.connect();
}

var onClickDisconnect = function() {
	AppActions.disconnect();
}

module.exports = Main;