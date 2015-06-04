var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppActions = require('../../actions/AppActions.js');
var GameManagerStore = require('../../stores/GameManagerStore');
var Led = require('../basic/Led.jsx');

var GameManager = React.createClass({
	mixins: [
		Reflux.connect(GameManagerStore),
	],

	propTypes: {
		isAuth:ReactPropTypes.bool
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
				<div style={{"display":this.props.isAuth ? "block" : "none"}}>
					<div style={{'fontWeight':'bold','fontSize':'20px','padding':'4px 0px'}}>Game List</div>
					{this.renderServerList(this.state.serverList)}
				</div>
				<div ref="statusBar">
					<div style={{'padding':'10px 0 5px 0','cursor':'pointer'}} onClick={this.props.onGameManagerToggle}>
						<Led isOk={this.props.isAuth}/>{this.props.isAuth ?' Authenificated ':' Unauthentificated '}
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
		return (<li key={server.id} style={{'listStyle':'none'}}>
					{/*We check port binding to know if server is up or down*/}
					<Led isOk={server.port !== null}/> {server.name}
					{this.renderJoinServer(server)}
					{this.renderDestroyServer(server)}
					{this.renderStartServer(server)}
					{this.renderStopServer(server)}
					{this.renderLeaveServer(server)}
				</li>);
	},

	onClick: function() {
		console.log('click');
	},

	renderJoinServer: function(server) {
		//hide this option if already in a game
		if(this.state.onGame !== null) return undefined;
		//hide this option if server stopped
		if(server.port === null) return undefined;
		return (<a data-serverName={server.name} href="" data-serverPort={server.port} onClick={function(e){
			AppActions.gameJoinServer(server.port);
			e.preventDefault();
		}}>(join)</a>);
	},

	renderDestroyServer: function(server) {
		return (<a data-serverName={server.name} href="" data-serverPort={server.port} onClick={function(e){
			AppActions.gameStopServer(server.name);
			AppActions.gameDestroyServer(server.name);
			e.preventDefault();
		}}>(destroy)</a>);
	},

	renderStartServer: function(server) {
		if(server.isStarted === true) return undefined;
		return (<a data-serverName={server.name} href="" data-serverPort={server.port} onClick={function(e){
			AppActions.gameStartServer(server.name);
			e.preventDefault();
		}}>(start)</a>);
	},

	renderStopServer: function(server) {
		if(server.isStarted === false) return undefined;
		return (<a data-serverName={server.name} href="" data-serverPort={server.port} onClick={function(e){
			AppActions.gameStopServer(server.name);
			e.preventDefault();
		}}>(stop)</a>);
	},

	renderLeaveServer: function(server) {
		if(server.port === null || this.state.onGame !== server.port) return undefined;
		return (<a data-serverName={server.name} href="" data-serverPort={server.port} onClick={function(e){
			AppActions.gameLeaveServer();
			e.preventDefault();
		}}>(leave)</a>);
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