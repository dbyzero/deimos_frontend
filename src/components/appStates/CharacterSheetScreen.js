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
			skillBonus:60
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
						val4={character.training}
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
				<div style={cssStyle['stats_hp']}><strong>{character.hp}</strong> Maximum HP</div>
				<div style={cssStyle['stats_will']}><strong>{character.will}</strong> Will (regen <strong>{character.willRegen}</strong>/s)</div>
				<div style={cssStyle['stats_physical_damage']}>+<strong>{character.damage}</strong>% physical damage</div>
				<div style={cssStyle['stats_skill_effeciency']}>+<strong>{character.skillBonus}</strong>% skill effeciency</div>
				<input ref="name" type="text" placeholder="Name" style={{'width':'280px'}} defaultValue={character.name} disabled="disabled"/>
				<br/>
				<table style={{width:'95px'}}>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Physical Damage" >Strengh</td>
						<td>{character.strengh}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ HP amount" >Endurance</td>
						<td>{character.endurance}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Will objectamount" >Willpower</td>
						<td>{character.willpower}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Regen will" >Focus</td>
						<td>{character.focus}</td>
					</tr>
					<tr style={cssStyle['attrTD']}>
						<td title="+ Skill effeciency" >Training</td>
						<td>{character.training}</td>
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
		newState['skillBonus'] = parseInt(this.state.val4 * 10);
		this.setState(newState);
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