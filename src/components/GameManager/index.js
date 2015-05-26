var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppActions = require('../../actions/AppActions.js');
var GameManagerStore = require('../../stores/GameManagerStore');
var Led = require('../basic/Led.jsx');

var GameManager = React.createClass({
	mixins: [
		Reflux.connect(GameManagerStore)
	],

	propTypes: {
	},

	render: function() {
		return (
			<div style={{
				width:'310px',
				position:'fixed',
				top:'-1000px',
				right:'0px',
				backgroundColor:'#cccccc',
				padding:'0px 10px 0px 10px',
				border:'1px solid grey',
				fontFamily:'sans-serif monospace',
				zIndex:999999,
				transition:'top 250ms, background-color 250ms'
			}}>
				<div style={{"display":this.props.isConnected ? "block" : "none"}}>
					<div style={{'fontWeight':'bold','fontSize':'20px','padding':'4px 0px'}}>Game List</div>
					{this.renderServerList(this.state.serverList)}
				</div>
				<div ref="statusBar">
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.props.onGameManagerToggle}>
						<Led connected={this.props.isConnected}/>{this.props.isConnected ?' Connected ':' Disconnected '}
					</div>
				</div>
			</div>
		);
	},

	renderServerList: function(serverList) {
		var list = [];
		var keys = Object.keys(serverList);
		for (var i = 0; i < keys.length; i++) {
			list.push(this.renderServer(serverList[keys[i]]));
		};
		return list;
	},

	renderServer: function(server) {
		return (<li key={server.id}>{server.name}
					<a data-serverId={server.name} href="#" onClick={function(){AppActions.gameJoinServer(server.name);}}>(join)</a>
					<a data-serverId={server.name} href="#" onClick={function(){AppActions.gameDestroyServer(server.name);}}>(destroy)</a>
				</li>);
	},

	onClick: function() {
		console.log('click');
	},

	componentDidUpdate: function() {
		var domNode = this.getDOMNode();
		statusBarHeight = this.refs.statusBar.getDOMNode().offsetHeight;
		if(this.state.reduce === false) {
			domNode.style.top = '0px';
		} else {
			var componentHeight = domNode.offsetHeight;
			domNode.style.top = (-1 * parseInt(componentHeight) + statusBarHeight)+'px';
		}
	}
});

module.exports = GameManager;