var React = require('react');
var ReactPropTypes = React.PropTypes;

//Test compomemt
var Polygone = React.createClass({
	propTypes : {
		label0:ReactPropTypes.string,
		label1:ReactPropTypes.string,
		label2:ReactPropTypes.string,
		label3:ReactPropTypes.string,
		label4:ReactPropTypes.string,
		val0:ReactPropTypes.number,
		val1:ReactPropTypes.number,
		val2:ReactPropTypes.number,
		val3:ReactPropTypes.number,
		val4:ReactPropTypes.number,
		size:ReactPropTypes.number,
		diameter:ReactPropTypes.number
	},
	render: function() {
		return (
			<canvas style={{'width':'100%','height':'100%'}}></canvas>
		);
	},

	componentDidMount:function() {
		this.renderPolygone();
	},

	componentDidUpdate:function() {
		this.renderPolygone();
	},

	renderPolygone:function() {
		renderPolygone(this.getDOMNode(),this.props.size,this.props.size,this.props,this.props.diameter,10, 11,'CC0000');
	}
});

module.exports = Polygone;

var renderPolygone = function(canvas, width, height, props, diameter, maxVal, fontSize, color) {
	diameter = parseInt(diameter);
	var vX = diameter+fontSize+10;//a bit of margin
	var vY = diameter+fontSize+5;//a bit of margin
	var angle = [
		(270 * Math.PI)/180,
		(342 * Math.PI)/180,
		(54  * Math.PI)/180,
		(126 * Math.PI)/180,
		(198 * Math.PI)/180
	];
	var context = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;

	context.clearRect(0, 0, canvas.width, canvas.height);

	//render strokes
	context.beginPath();
	var x = parseInt(Math.cos(angle[0])*diameter + vX);
	var y = parseInt(Math.sin(angle[0])*diameter + vY);
	context.moveTo(x,y);
	context.font = fontSize+"pt Arial";
	context.textAlign = "center";
	context.fillText(props['label0'], x, y-4);
	for(var i=0;i<5;i++) {
		x = parseInt(Math.cos(angle[i])*diameter + vX);
		y = parseInt(Math.sin(angle[i])*diameter + vY);
		context.lineTo(x,y);
		switch(i) {
			case 1:
				context.fillText(props['label'+i], x+10, y);
				break;
			case 2:
				context.fillText(props['label'+i], x+10, y+10);
				break;
			case 3:
				context.fillText(props['label'+i], x-12, y+10);
				break;
			case 4:
				context.fillText(props['label'+i], x-10, y);
				break;
		}
	}
	context.closePath();
	context.stroke();

	//render vals
	context.beginPath();
	var x = parseInt(Math.cos(angle[0])*Math.min(maxVal,parseInt(props['val0']))*diameter/maxVal + vX);
	var y = parseInt(Math.sin(angle[0])*Math.min(maxVal,parseInt(props['val0']))*diameter/maxVal + vY);
	context.moveTo(x,y);
	for(var i=0;i<5;i++) {
		x = parseInt(Math.cos(angle[i])*Math.min(maxVal,parseInt(props['val'+i]))*diameter/maxVal + vX);
		y = parseInt(Math.sin(angle[i])*Math.min(maxVal,parseInt(props['val'+i]))*diameter/maxVal + vY);
		context.lineTo(x,y);
	}
	context.closePath();
	context.fillStyle=color;
	context.fill();
}