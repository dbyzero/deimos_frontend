var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');
var Polygone = require('../basic/Polygone.js');

var HomeScreen = React.createClass({
	mixins: [
		Reflux.connect(AppStore, 'store'),
	],


	getInitialState: function(){
		return {
			hp:600,
			will:30,
			willRegen:7,
			damage:60,
			training:60
		}
	},

	render: function() {
		var character = AppStore.getCurrentAvatar();
		console.log(character);
		return (
			<div style={{'position':'Nelative','height':'100%'}}>
				<div style={cssStyle['polygone']}>
					<Polygone ref="polygone" 
						val0={character.strengh}
						val1={character.endurance}
						val2={character.willpower}
						val3={character.focus}
						val4={character.strengh}
						label0='S'
						label1='E'
						label2='W'
						label3='F'
						label4='T'
						size='137'
						diameter='48'
					>
					</Polygone>
				</div>
				<div style={cssStyle['stats_hp']}><strong>{this.state.hp}</strong> Maximum HP</div>
				<div style={cssStyle['stats_will']}><strong>{this.state.will}</strong> Will (regen <strong>{this.state.willRegen}</strong>/s)</div>
				<div style={cssStyle['stats_physical_damage']}>+<strong>{this.state.damage}</strong>% physical damage</div>
				<div style={cssStyle['stats_skill_effeciency']}>+<strong>{this.state.training}</strong>% skill effeciency</div>
				<input ref="name" type="text" placeholder="Name" style={{'width':'280px'}} defaultValue={character.name} disabled="disabled"/>
				<br/>
				<table style={{width:'95px'}}>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Physical Damage" >Strengh</td>
						<td>{this.state.val0}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ HP amount" >Endurance</td>
						<td>{this.state.val1}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Will objectamount" >Willpower</td>
						<td>{this.state.val2}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Regen will" >Focus</td>
						<td>{this.state.val3}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Skill effeciency" >Training</td>
						<td>{this.state.val4}</td>
					</tr>
				</table>
				<br/>
				<div ref="avatarVisual" style={cssStyle['avatarVisual']}></div>
				<input type="button" value="Back" onClick={AppActions.showHomeScreen} style={cssStyle['backButton']}/>
			</div>
		);
	},

	updateVal: function(idx,val) {
		var newState = {};
		newState['val'+idx] = parseInt(val);
		this.state['val'+idx] = parseInt(val);
		this.setState(newState);
		this.calcAttributes();
	},

	calcAttributes: function(idx,val) {
		var newState = {};
		newState['hp'] = parseInt(this.state.val1 * 100);
		newState['will'] = parseInt(this.state.val2 * 5);
		newState['willRegen'] = parseInt(this.state.val3);
		newState['damage'] = parseInt(this.state.val0 * 10);
		newState['training'] = parseInt(this.state.val4 * 10);
		this.setState(newState);
	},

	createCharacter: function() {
		var data = {};
		data['name']		= this.refs['name'].getDOMNode().value || '';
		data['hp']			= this.state.hp || null;
		data['will']		= this.state.will || null;
		data['willRegen']	= this.state.willRegen || null;
		data['damage']		= this.state.damage || null;
		data['training']	= this.state.training || null;
		data['strengh']		= this.state.val0 || null;
		data['endurance']	= this.state.val1 || null;
		data['willpower']	= this.state.val2 || null;
		data['focus']		= this.state.val3 || null;
		data['traning']		= this.state.val4 || null;

		if(data['name'].length < 3) {
			AppActions.serverError('nameTooShort');
		} else if(
			data['hp'] === null ||
			data['will'] === null ||
			data['willRegen'] === null ||
			data['damage'] === null ||
			data['training'] === null ||
			data['strengh'] === null ||
			data['endurance'] === null ||
			data['willpower'] === null ||
			data['focus'] === null ||
			data['traning'] === null
		) {
			AppActions.serverError('nameTooShort');
		} else {
			AppActions.createCharacter(data);
		}
	},

	componentWillMount: function() {
		this.calcAttributes();
	}
});

var cssStyle = {
	'attrTD' : {
		'fontSize':'11px',
	},
	'sliderLeft' : {
		'width':'90px',
		'marginLeft':'10px'
	},
	'sliderVal' : {
		'width':'10px'
	},
	'stats_hp' : {
		'position':'absolute',
		'top':'202px',
		'left':'120px',
		'fontSize':'11px'
	},
	'stats_will' : {
		'position':'absolute',
		'top':'221px',
		'left':'120px',
		'fontSize':'11px'
	},
	'stats_physical_damage' : {
		'position':'absolute',
		'top':'239px',
		'left':'120px',
		'fontSize':'11px'
	},
	'stats_skill_effeciency' : {
		'position':'absolute',
		'top':'256px',
		'left':'120px',
		'fontSize':'11px'
	},
	'polygone' : {
		'width':'137',
		'height':'137px',
		'position':'absolute',
		'top':'71px',
		'right':'43px'
	},
	'colorPicker' : {
		'width':'35px',
		'height':'20px',
		'float':'left',
		'marginLeft':'5px'
	},
	'avatarVisual' : {
		'clear':'left',
		'width':'50px',
		'height':'80px',
		'backgroundColor':'black',
		'float':'left'
	},
	'backButton' : {
		'position':'absolute',
		'bottom':'5px',
		'right':'5px'
	},
}

module.exports = HomeScreen;