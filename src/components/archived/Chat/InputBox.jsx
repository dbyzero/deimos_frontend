var React = require('react');
var ReactPropTypes = React.PropTypes;

//Test compomemt
var InputBox = React.createClass({

	propTypes: {
		onSubmit:ReactPropTypes.func
	},

	getInitialState: function() {
		return {
			value: ''
		}
	},

	render: function() {
		return (
			<div>
				<form>
					<input type="text" onChange={this.onChangeVal} value={this.state.value} style={{
						"border": "grey",
						"backgroundColor": "white",
						"width": "200px",
						"padding": "0",
						"margin": "0",
						"borderRadius": "0",
						"height":"20px"
					}}/>
					<button type="submit" onClick={this.sendMessage}  style={{
						"border": "grey",
						"backgroundColor": "#dfdfdf",
						"width": "110px",
						"padding": "0",
						"margin": "0",
						"borderRadius": "0",
						"height":"20px"
					}}> Send message </button>
				</form>
			</div>
		);
	},

	onChangeVal: function(e) {
		this.setState({
			"value":""+e.target.value
		});
	},

	sendMessage: function(e) {
		if(this.state.value.length > 0) {
			this.props.onSubmit(this.state.value);
			this.setState({
				"value":""
			});
		};
		e.preventDefault();
	}
});

module.exports = InputBox;