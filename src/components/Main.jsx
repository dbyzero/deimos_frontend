var React = require('react');
var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore');
var Led = require('./Led.jsx');
var InputBox = require('./InputBox.jsx');
var MessageList = require('./MessageList.jsx');

//metrics to notify a changement
var msgCount = 0;
var userCount = 0;

var Main = React.createClass({
	mixins: [Reflux.connect(AppStore,'appStore')],

	render: function() {
		return (
			<div style={{
				width:'310px',
				position:'fixed',
				bottom:'-1000px',
				right:'0px',
				backgroundColor:'#cccccc',
				padding:'0px 10px 10px 10px',
				border:'1px solid grey',
				fontFamily:'sans-serif monospace',
				zIndex:999999,
				transition:'bottom 250ms, background-color 250ms'
			}}>
				<div>
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.clickTogglePanel}>
						<Led connected={this.state.appStore.isConnected}/>{this.state.appStore.isConnected ?' Connected ':' Disconnected '}
						(<strong>{this.state.appStore.channel}</strong>)
					</div>
					Username : <strong>{this.state.appStore.username}</strong><br/>
					({this.state.appStore.users.length}) user{this.state.appStore.users.length > 1 ? 's' : ''} : <strong>{this.state.appStore.users.join(', ')}</strong><br/>
					<button onClick={this.connect} style={{
						"border": "grey",
						"backgroundColor": "#dfdfdf",
						"width": "110px",
						"padding": "0",
						"margin": "7px 0 0 0",
						"borderRadius": "0",
						"height":"20px",
						"display":this.state.appStore.isConnected ? "none" : "inline-block"
					}}> connect </button>
					<button onClick={this.disconnect} style={{
						"border": "grey",
						"backgroundColor": "#dfdfdf",
						"width": "110px",
						"padding": "0",
						"margin": "7px 0 0 0",
						"borderRadius": "0",
						"height":"20px",
						"display":this.state.appStore.isConnected ? "inline-block" : "none"
					}}> disconnect </button>
				</div>
				<div style={{"display":this.state.appStore.isConnected ? "block" : "none"}}>
					<MessageList messages={this.state.appStore.messages}/>
					<InputBox onSubmit={this.sendMessage}/>
				</div>
			</div>
		);
	},

	connect: function() {
		AppActions.connect();
	},

	disconnect: function() {
		AppActions.disconnect();
	},

	sendMessage: function(msg) {
		console.log(__filename + ' sendMessage '+ msg);
		this.state.appStore.socket.emit('message',{data:msg});
	},

	componentDidUpdate: function() {
		var domNode = this.getDOMNode();
		statusBarHeight = domNode.firstChild.firstChild.offsetHeight;
		if(this.state.appStore.reduce) {
			var componentHeight = domNode.offsetHeight;
			domNode.style.bottom = (-1 * parseInt(componentHeight) + statusBarHeight)+'px';
			if(
				msgCount < this.state.appStore.messages.length ||
				userCount < this.state.appStore.users.length
			) {
				domNode.style.backgroundColor = 'rgb(255, 255, 255)';
				setTimeout(function(){
					domNode.style.backgroundColor = '#cccccc';
				}.bind(this),250);
			}
		} else {
			domNode.style.bottom = '0px';
		}

		//update counting
		msgCount = this.state.appStore.messages.length;
		userCount = this.state.appStore.users.length;
	},

	clickTogglePanel: function() {
		AppActions.chatToggle();
	}

});

module.exports = Main;