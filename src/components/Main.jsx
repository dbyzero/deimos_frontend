var React = require('react');
var Reflux = require('reflux');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Chat = require('./Chat');
var LoginForm = require('./LoginForm');
var GameManager = require('./GameManager');

//metrics to notify a changement

var Main = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div>
				<button style={{'position':'absolute','bottom':'0px','left':'100px'}} onClick={AppActions.gameCreateServer}>Create server</button>
				<LoginForm
					isAuth={this.state.isAuth}
					isConnected={this.state.isConnected}
				/>
				<Chat 
					isAuth={this.state.isAuth}
					onChatToggle={AppActions.chatToggle}
					onSendMessage={onChatSendMessage.bind(this)}
				/>
				<GameManager
					onGameManagerToggle={AppActions.gameManagerToggle}
					isAuth={this.state.isAuth}
				/>
			</div>
		);
	}
});

var onChatSendMessage = function(msg) {
	console.log(__filename + ' onSendMessage '+ msg);
	AppActions.chatSendMessage(msg);
}

module.exports = Main;