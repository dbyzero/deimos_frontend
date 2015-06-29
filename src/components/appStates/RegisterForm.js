var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

var AppActions = require('../../actions/AppActions.js');

var RegisterForm = React.createClass({

	render: function() {
		return (
			<div>
				<input ref="login" type="text" placeholder="Login"/>
				<input ref="password" type="password" placeholder="Password"/>
				<input ref="password_confirm" type="password" placeholder="Confirm plateform"/>
				<input ref="email" type="text" placeholder="Email"/>
				<br/>
				<input type="button" value="Cancel" onClick={AppActions.showLoginForm}/>
				<input type="button" value="Create Account" onClick={this.onClickRegister}/>
			</div>
		);
	},

	onClickRegister: function(e) {
		var login = this.refs['login'].getDOMNode().value;
		var password = this.refs['password'].getDOMNode().value;
		var password_confirm = this.refs['password_confirm'].getDOMNode().value;
		var mail = this.refs['email'].getDOMNode().value;
		if (login.length === 0) {
			AppActions.serverError({'message':'loginRequired'});
		} else if (mail.length === 0) {
			AppActions.serverError({'message':'emailRequired'});
		} else if(password.length < 5) {
			AppActions.serverError({'message':'passwordTooShort'});
		} else if (password !== password_confirm) {
			AppActions.serverError({'message':'passwordsNotMatch'});
		} else {
			AppActions.register(login,md5(password),mail);
		}
	}
});

module.exports = RegisterForm;