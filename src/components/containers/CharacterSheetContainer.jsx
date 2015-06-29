var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppActions = require('../../actions/AppActions.js');

var CharacterSheetContainer = React.createClass({

	render: function() {
		return (
			<div id="puck-character-sheet-container-wrapper" style={{
					'top':(this.props.isHidden ? '-381px' : '0px'),
					'transition-timing-function': (this.props.isHidden ? 'linear' : 'cubic-bezier(1,1.67,.29,.65)')
				}}>
				<div id="puck-character-sheet-container-chain"></div>
				<div id="puck-character-sheet-container"></div>
			</div>
		);
	}
});

module.exports = CharacterSheetContainer;