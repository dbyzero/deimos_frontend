var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');

var HomeScreen = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div>
				CHARACTER SHEET
				<input type="button" value="back" onClick={AppActions.showHomeScreen}/>
			</div>
		);
	},
});

module.exports = HomeScreen;