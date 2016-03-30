var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('md5');

var AppActions = require('../../actions/AppActions.js');

var LoginForm = React.createClass({

	render: function() {
		return (
			<div>
				<input ref="login" type="text" placeholder="Login"/>
				<input ref="password" type="password" placeholder="Password"/>
				<br/>
				<input type="button" onClick={AppActions.showRegisterForm} value="Create Account"/>
				<input type="button" onClick={this.onClickLogin} value="Login"/>
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
});

module.exports = LoginForm;
