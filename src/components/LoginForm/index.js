var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

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
					<input ref="login" type="text" placeholder="Account"  defaultValue="lolo" style={{
						"display":this.props.hide ? "none" : "inline-block"
					}}/>
					<input ref="password" type="password" placeholder="Password" defaultValue="toto" style={{
						"display":this.props.hide ? "none" : "inline-block"
					}}/><br/>

					<button type="button" onClick={this.onClickLogin} style={{
						"display":this.props.isAuth || this.props.hide ? "none" : "inline-block"
					}}> Login </button>

					<button type="button" onClick={this.onClickLoggout} style={{
						"display":this.props.isAuth ? "inline-block" : "none"
					}}> Logout </button>

				</div>
				<div ref="statusBar">
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.props.onGameManagerToggle}>
						<Led isOk={this.props.isConnected}/>{this.props.isConnected ?' Connected ':' Disconnected '}
						<Led isOk={this.props.isAuth}/>{this.props.isAuth ?' Authenticated ':' Unauthenticated '}
					</div>
				</div>
				<iframe src={this.state.serverURL + '/cookie'} id="puck_iframe_credentials">
				</iframe>
			</div>
		);
	},

	onClickLogin: function(e) {
		var login = this.refs['login'].getDOMNode().value;
		var password = this.refs['password'].getDOMNode().value;
		if(login && password) {
			AppActions.login(login,md5(password));
		}
	},

	onClickLoggout: function(e) {
		AppActions.loggout();
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