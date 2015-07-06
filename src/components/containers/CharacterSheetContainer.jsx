var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');

var CharacterSheetContainer = React.createClass({

	mixins: [
		Reflux.connect(AppStore, 'store'),
	],

	render: function() {
		return (
			<div id="puck-character-sheet-container-wrapper" style={{
					'top':(this.props.isHidden ? '-381px' : '0px'),
					'transition-timing-function': (this.props.isHidden ? 'linear' : 'cubic-bezier(1,1.67,.29,.65)')
				}}>
				<div id="puck-character-sheet-container-chain"></div>
				<div id="puck-character-sheet-container">
					<div style={cssStyle['leftBlock']}>
					</div>
					<div style={cssStyle['rightBlock']}>
					</div>
				</div>
			</div>
		);
	}
});

var cssStyle = {
	'leftBlock' : {
		'width':'300px',
		'height':'100%',
		'backgroundColor':'red',
		'float':'left'
	},
	'rightBlock' : {
		'width':'120px',
		'height':'100%',
		'backgroundColor':'blue',
		'float':'right'
	}
}

module.exports = CharacterSheetContainer;