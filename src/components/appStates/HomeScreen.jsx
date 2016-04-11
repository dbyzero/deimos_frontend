var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('md5');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');

var HomeScreen = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div>
				Account : {this.state.account}<br/>
				Character : {this.state.currentAvatarSelected}<br/>
				<select onChange={this.onChangeAvatarSelected} defaultValue={this.state.currentAvatarSelected}>
				{this.renderCharacterList()}
				</select>
				<input type="button" value="Add" onClick={AppActions.showCreateCharacterForm}/>
				<ul>
					<li><a href="javascript:void(0);" onClick={AppActions.showCharacterSheetScreen}>Character Sheet</a></li>
					<li><a href="javascript:void(0);" onClick={function(){AppActions.gameJoinServer("home_" + this.state.currentAvatarSelected);}.bind(this)}>Go to Home</a></li>
					<li><a href="javascript:void(0);" onClick={AppActions.showJoinPartyScreen}>Join a Party</a></li>
					<li><a href="javascript:void(0);" onClick={AppActions.showCreatePartyScreen}>Create a Party</a></li>
				</ul>
				<input type="button" value="Logout" onClick={AppActions.loggout}/>
			</div>
		);
	},

	renderCharacterList: function() {
		var list = [];
		for (var i = 0; i < this.state.characters.length; i++) {
			list.push(this.renderCharacter(this.state.characters[i]));
		};
		return list;
	},

	renderCharacter: function(character) {
		return <option key={character.id} value={character.id}>{character.name}</option>;
	},

	onChangeAvatarSelected: function(e) {
		AppActions.setCharacterSelected(e.target.value);
	},

	onClickLogin: function(e) {
		var login = this.refs['login'].getDOMNode().value;
		var password = this.refs['password'].getDOMNode().value;
		if(login && password) {
			AppActions.login(login,md5(password));
		}
	},
});

module.exports = HomeScreen;
