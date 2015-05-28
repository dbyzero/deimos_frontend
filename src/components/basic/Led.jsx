var React = require('react');
var ReactPropTypes = React.PropTypes;

//Test compomemt
var Led = React.createClass({
	propTypes : {
		isOk:ReactPropTypes.bool
	},
	render: function() {
		return (
			<span style={{
				display:'inline-block',
				borderRadius:'5px',
				width:'10px',
				height:'10px',
				backgroundColor:(this.props.isOk ? 'green' : 'red')
			}}></span>
		);
	}
});

module.exports = Led;