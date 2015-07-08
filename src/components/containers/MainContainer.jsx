var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var LoginForm = require('../appStates/LoginForm');
var HomeScreen = require('../appStates/HomeScreen');
var CharacterSheetScreen = require('../appStates/CharacterSheetScreen');
var CreateCharacterForm = require('../appStates/CreateCharacterForm');
var JoinPartyScreen = require('../appStates/JoinPartyScreen');
var CreatePartyScreen = require('../appStates/CreatePartyScreen');
var RegisterForm = require('../appStates/RegisterForm');

var AppActions = require('../../actions/AppActions.js');

var MainContainer = React.createClass({

	render: function() {
		return (
			<div id="puck-main-container-wrapper" style={{
					'top':(this.props.isHidden ? '-281px' : '0px'),
					'transitionTimingFunction': (this.props.isHidden ? 'linear' : 'cubic-bezier(1,1.67,.29,.65)')
				}}>
				<div id="puck-main-container-chain"></div>
				<div id="puck-main-container">
					{this.renderCurrentState()}
				</div>
				<a id="puck-main-container-toggle-button" href="javascript:void(0)" onClick={this.onToggle}></a>
				<iframe width="1px" height="1px" style={{position:'absolute',bottom:'0px',left:'0px',border:'0px'}} id="puck-iframe-sso" src={this.props.serverURL + '/cookie'} id="puck_iframe_credentials">
				</iframe>
			</div>
		);
	},

	renderCurrentState: function() {
		switch(this.props.appState) {
			case "LoginForm":
				return <LoginForm/>;
			case "RegisterForm":
				return <RegisterForm/>;
			case "HomeScreen":
				return <HomeScreen/>;
			case "CharacterSheetScreen":
				return <CharacterSheetScreen/>;
			case "CreateCharacterForm":
				return <CreateCharacterForm/>;
			case "JoinPartyScreen":
				return <JoinPartyScreen/>;
			case "CreatePartyScreen":
				return <CreatePartyScreen/>;
		}
	},

	onToggle: function() {
		AppActions.mainContainerToggle();
	}
});

module.exports = MainContainer;