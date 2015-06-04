var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var ChatStore = require('../../stores/ChatStore');
var Led = require('../basic/Led.jsx');
var InputBox = require('./InputBox.jsx');
var MessageList = require('./MessageList.jsx');


//metrics to notify a changement
var msgCount = 0;
var userCount = 0;

var Chat = React.createClass({
	mixins: [
		Reflux.connect(ChatStore)
	],

	propTypes: {
		//scalaires
		isAuth:ReactPropTypes.bool.isRequired,

		//callback
		onClickConnect:ReactPropTypes.func.isRequired,
		onClickDisconnect:ReactPropTypes.func.isRequired,
		onChatToggle:ReactPropTypes.func.isRequired,
		onSendMessage:ReactPropTypes.func.isRequired
	},

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
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.props.onChatToggle}>
						<Led isOk={this.props.isAuth}/>{this.props.isAuth ?' Authenticate ':' Unauthenticated '}
						(<strong>{this.state.channel}</strong>)
					</div>
					Username : <strong>{this.state.username}</strong><br/>
					({this.state.users.length}) user{this.state.users.length > 1 ? 's' : ''} : <strong>{this.state.users.join(', ')}</strong><br/>
					<button onClick={this.onClickConnect} style={{
						"border": "grey",
						"backgroundColor": "#dfdfdf",
						"width": "110px",
						"padding": "0",
						"margin": "7px 0 0 0",
						"borderRadius": "0",
						"height":"20px",
						"display":this.props.isAuth ? "none" : "inline-block"
					}}> connect </button>
					<button onClick={this.onClickDisconnect} style={{
						"border": "grey",
						"backgroundColor": "#dfdfdf",
						"width": "110px",
						"padding": "0",
						"margin": "7px 0 0 0",
						"borderRadius": "0",
						"height":"20px",
						"display":this.props.isAuth ? "inline-block" : "none"
					}}> disconnect </button>
				</div>
				<div style={{"display":this.props.isAuth ? "block" : "none"}}>
					<MessageList messages={this.state.messages}/>
					<InputBox onSubmit={this.sendMessage}/>
				</div>
			</div>
		);
	},

	onClickConnect: function() {
		console.log(__filename + ' onClickConnect');
		this.props.onClickConnect();
	},

	onClickDisconnect: function() {
		console.log(__filename + ' onClickDisconnect');
		this.props.onClickDisconnect();
	},

	testFunction: function() {
		debugger;
	},

	sendMessage: function(msg) {
		this.props.onSendMessage(msg);
	},

	componentDidUpdate: function() {
		var domNode = this.getDOMNode();
		statusBarHeight = domNode.firstChild.firstChild.offsetHeight;
		if(this.state.reduce === false) {
			domNode.style.bottom = '0px';
		} else {
			var componentHeight = domNode.offsetHeight;
			domNode.style.bottom = (-1 * parseInt(componentHeight) + statusBarHeight)+'px';
			if(
				msgCount < this.state.messages.length ||
				userCount < this.state.users.length
			) {
				domNode.style.backgroundColor = 'rgb(255, 255, 255)';
				setTimeout(function(){
					domNode.style.backgroundColor = '#cccccc';
				}.bind(this),250);
			}
		}

		//update counting
		msgCount = this.state.messages.length;
		userCount = this.state.users.length;
	}

});

module.exports = Chat;