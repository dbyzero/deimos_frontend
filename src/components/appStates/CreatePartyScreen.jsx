var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');

var JoinPartyScreen = React.createClass({
	mixins: [
		Reflux.connect(AppStore),
	],

	render: function() {
		return (
			<div style={cssStyle['container']}>
				<select style={cssStyle['selectGameType']}>
					<option>FFA Arena #1</option>
					<option>FFA Arena #2</option>
					<option>FFA Arena #3</option>
					<option>Fight Boss #1</option>
					<option>Fight Boss #2</option>
					<option>Fight Boss #3</option>
				</select>
				<input style={cssStyle['inviteFieldText']} type="text" placeholder="invite player name"/>
				<input style={cssStyle['inviteFieldButton']} type="button" value="Invite"/>
				<input type="text" placeholder="player #1" style={cssStyle['roomPlaceOdd']} disabled={true}/>
				<input type="text" placeholder="player #2" style={cssStyle['roomPlaceEven']} disabled={true}/>
				<input type="text" placeholder="player #3" style={cssStyle['roomPlaceOdd']} disabled={true}/>
				<input type="text" placeholder="player #4" style={cssStyle['roomPlaceEven']} disabled={true}/>
				<input type="text" placeholder="player #5" style={cssStyle['roomPlaceOdd']} disabled={true}/>
				<input type="text" placeholder="player #6" style={cssStyle['roomPlaceEven']} disabled={true}/>
				<input type="text" placeholder="player #7" style={cssStyle['roomPlaceOdd']} disabled={true}/>
				<input type="text" placeholder="player #8" style={cssStyle['roomPlaceEven']} disabled={true}/>
				<input style={cssStyle['cancelButton']} type="button" value="cancel" onClick={AppActions.showHomeScreen}/>
				<input style={cssStyle['startButton']} type="button" value="start" onClick={AppActions.showHomeScreen}/>
			</div>
		);
	},
});

var cssStyle = {
	'container' : {
		'height':'100%',
		'width':'100%',
		'position':'relative'
	},
	'selectGameType' : {
		'width':'100%'
	},
	'startButton' : {
		'position':'absolute',
		'right':'10px',
		'bottom':'30px'
	},
	'cancelButton' : {
		'position':'absolute',
		'right':'60px',
		'bottom':'30px'
	},
	'roomPlaceOdd' : {
		'width':'130px',
		'float':'left',
		'marginTop':'15px'
	},
	'roomPlaceEven' : {
		'width':'130px',
		'float':'right',
		'marginTop':'15px'
	},
	'inviteFieldText' : {
		'marginTop':'15px',
		'width':'230px',
		'float':'left'
	},
	'inviteFieldButton' : {
		'marginTop':'15px',
		'width':'45px',
		'float':'right',
	}
}

module.exports = JoinPartyScreen;