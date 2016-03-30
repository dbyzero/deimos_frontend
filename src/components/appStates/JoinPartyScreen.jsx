var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppStore = require('../../stores/AppStore');
var GameManagerStore = require('../../stores/GameManagerStore');
var AppActions = require('../../actions/AppActions');

var Led = require('../basic/Led.jsx')

var JoinPartyScreen = React.createClass({
	mixins: [
		Reflux.connect(AppStore,'store'),
		Reflux.connect(GameManagerStore,'gameManagerStore'),
	],

	getInitialState: function() {
		return {
			filter:''
		};
	},

	render: function() {
		return (
			<div style={cssStyle['container']} >
				<div style={cssStyle['filter']}>
					<input type="text" onChange={this.onChangeFilter} style={cssStyle['filter']} defaultValue={this.state.filter} placeholder="Type text here to filter"/>
				</div>
				<div style={cssStyle['listingInstance']}>
					<ul style={cssStyle['listGameUL']}>
						{this.renderGameList()}
					</ul>
				</div>
				<input style={cssStyle['backButton']} type="button" value="back" onClick={AppActions.showHomeScreen}/>
			</div>
		);
	},

	onChangeFilter: function(e) {
		this.setState({'filter':e.target.value});
	},

	renderGameList : function() {
		// console.log(this.state.gameManagerStore.serverList);
		// var serverList = [
		// 	{
		// 		'name':'Game public #1',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	},
		// 	{
		// 		'name':'Game public #2',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	},
		// 	{
		// 		'name':'Game public #3',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	},
		// 	{
		// 		'name':'Game public #4',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	},
		// 	{
		// 		'name':'Adventure #1',
		// 		'room':3,
		// 		'max':8,
		// 		'type':'adventure'
		// 	},
		// 	{
		// 		'name':'Adventure #2',
		// 		'room':3,
		// 		'max':8,
		// 		'type':'adventure'
		// 	},
		// 	{
		// 		'name':'Adventure #3',
		// 		'room':3,
		// 		'max':8,
		// 		'max':Infinity,
		// 		'type':'adventure'
		// 	},
		// 	{
		// 		'name':'Game public #5',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	},
		// 	{
		// 		'name':'Game public #6',
		// 		'room':8,
		// 		'max':Infinity,
		// 		'type':'public'
		// 	}
		// ];

		var serverList = this.state.gameManagerStore.serverList;
		var gameList = [];
		var row = 0;
		for (var key in serverList) {
			//check if filter is in party name
			var server = serverList[key];
			if(this.state.filter.length > 0 && server.name.indexOf(this.state.filter) === -1) continue;
			gameList.push(
				<li key={row} style={cssStyle[row % 2 === 0 ? 'listGameLIeven' : 'listGameLIodd']}>
					<span style={cssStyle['typeGameIcon']}>
						{server.players + (server.max === null ? '' : '/' + server.max)}
					</span>
					<Led isOk={server.isStarted}/> {server.name}
					<button style={cssStyle['joinButton']} data-port={server.port} data-id={server.id} onClick={this.onClickJoinServer}>join</button>
				</li>
			)
			row++;
		}

		return gameList;
	},

	onClickJoinServer: function(e) {
		AppActions.gameJoinServer(e.target.dataset.port);
	}
});

var cssStyle = {
	'container' : {
		'height':'100%',
		'width':'100%',
		'position':'relative'
	},
	'listingInstance' : {
		'width':'100%',
		'height':'185px',
		'overflowY':'scroll',
		'border':'1px solid black'
	},
	'filter' : {
		'width':'279px'
	},
	'listGameUL' : {
		'padding':'0px',
		'margin':'0px',
	},
	'listGameLIodd' : {
		'listStyleType': 'none',
		'backgroundColor':'#dddddd',
		'position':'relative',
		'lineHeight':'21px'
	},
	'listGameLIeven' : {
		'listStyleType': 'none',
		'backgroundColor':'white',
		'position':'relative',
		'lineHeight':'21px'
	},
	'typeGameIcon' : {
		'display':'inline-block',
		'width':'30px',
		'fontWeight':'bold'
	},
	'joinButton' : {
		'position':'absolute',
		'right':'0px'
	},
	'backButton' : {
		'position':'absolute',
		'right':'10px',
		'bottom':'30px'
	}
}

module.exports = JoinPartyScreen;
