var React = require('react');
var Reflux = require('reflux');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

// var Chat = require('./Chat');
var MainContainer = require('./containers/MainContainer');
var CharacterSheetContainer = require('./containers/CharacterSheetContainer');
// var LoginForm = require('./LoginForm');
// var GameManager = require('./GameManager');

//metrics to notify a changement

var Main = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div>
				<MainContainer
					isHidden={this.state.isHidden}
					isAuth={this.state.isAuth}
					isConnected={this.state.isConnected}
					serverURL={this.state.serverURL}
					appState={this.state.appState}
				/>
				{this.state.showInventory ? this.showInventory() : undefined}
				{
				/*
				<LoginForm
					hide={this.state.hideLoginForm}
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
				*/
				}
			</div>
		);
	},

	showInventory: function() {
		return <CharacterSheetContainer
			isHidden={this.state.isHidden}
		/>
	}
});

var onChatSendMessage = function(msg) {
	console.log(__filename + ' onSendMessage '+ msg);
	AppActions.chatSendMessage(msg);
}

module.exports = Main;