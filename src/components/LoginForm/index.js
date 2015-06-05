var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppActions = require('../../actions/AppActions.js');
var AppStore = require('../../stores/AppStore');
var Led = require('../basic/Led.jsx');

var LoginForm = React.createClass({
	mixins: [
		Reflux.connect(AppStore)
	],

	render: function() {
		return (
			<div style={{
				width:'310px',
				position:'fixed',
				top:'0px',
				left:'0px',
				backgroundColor:'#cccccc',
				padding:'0px 10px 0px 10px',
				border:'1px solid grey',
				fontFamily:'sans-serif monospace',
				zIndex:999999,
				transition:'top 250ms, background-color 250ms'
			}}>
				<div>
					<div style={{'fontWeight':'bold','fontSize':'20px','padding':'4px 0px'}}>Login Form</div>
					<input ref="login" type="text" placeholder="Account"  defaultValue="lolo"/>
					<input ref="password" type="password" placeholder="Password" defaultValue="f71dbe52628a3f83a77ab494817525c6"/><br/>

					<button type="button" onClick={this.onClickLogin} style={{
						"display":this.props.isAuth ? "none" : "inline-block"
					}}> Login </button>

					<button type="button" onClick={this.onClickLoggout} style={{
						"display":this.props.isAuth ? "inline-block" : "none"
					}}> Logout </button>

					<button type="button" onClick={this.onClickConnect} style={{
						"display":this.props.isConnected ? "none" : "inline-block"
					}}> Connect </button>

					<button type="button" onClick={this.onClickDisconnect} style={{
						"display":(this.props.isConnected && !this.props.isAuth) ? "inline-block" : "none"
					}}> Disconnect </button>

				</div>
				<div ref="statusBar">
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.props.onGameManagerToggle}>
						<Led isOk={this.props.isConnected}/>{this.props.isConnected ?' Connected ':' Disconnected '}
						<Led isOk={this.props.isAuth}/>{this.props.isAuth ?' Authenticated ':' Unauthenticated '}
					</div>
				</div>
			</div>
		);
	},

	onClickLogin: function(e) {
		var login = this.refs['login'].getDOMNode().value;
		var password = this.refs['password'].getDOMNode().value;
		if(login && password) {
			AppActions.login(login,password);
		}
	},

	onClickLoggout: function(e) {
		AppActions.loggout();
	},

	onClickConnect: function() {
		console.log(__filename + ' onClickConnect');
		this.props.onClickConnect();
	},

	onClickDisconnect: function() {
		console.log(__filename + ' onClickDisconnect');
		this.props.onClickDisconnect();
	},

	componentDidUpdate: function() {
		// var domNode = this.getDOMNode();
		// statusBarHeight = this.refs.statusBar.getDOMNode().offsetHeight;
		// if(this.state.reduce === false) {
		// 	domNode.style.top = '0px';
		// } else {
		// 	var componentHeight = domNode.offsetHeight;
		// 	domNode.style.top = (-1 * parseInt(componentHeight) + statusBarHeight)+'px';
		// }
	}
});

module.exports = LoginForm;