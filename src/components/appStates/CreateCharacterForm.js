var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');
var md5 = require('MD5');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');
var Polygone = require('../basic/Polygone.js');

var CreateCharacterForm = React.createClass({
	mixins: [
		Reflux.connect(AppStore, 'store'),
	],

	getInitialState: function(){
		return {
			val0:6,
			val1:6,
			val2:6,
			val3:6,
			val4:6,
			hp:600,
			will:30,
			willRegen:7,
			damage:60,
			skillBonus:60
		}
	},

	render: function() {
		return (
			<div style={{'position':'Nelative','height':'100%'}}>
				<div style={cssStyle['polygone']}>
					<Polygone ref="polygone" 
						val0={this.state.val0}
						val1={this.state.val1}
						val2={this.state.val2}
						val3={this.state.val3}
						val4={this.state.val4}
						label0='S'
						label1='E'
						label2='W'
						label3='F'
						label4='T'
						size={115}
						diameter={40}
					>
					</Polygone>
				</div>
				<div style={cssStyle['stats_hp']}><strong>{this.state.hp}</strong> Maximum HP</div>
				<div style={cssStyle['stats_will']}><strong>{this.state.will}</strong> Will (regen <strong>{this.state.willRegen}</strong>/s)</div>
				<div style={cssStyle['stats_physical_damage']}>+<strong>{this.state.damage}</strong>% physical damage</div>
				<div style={cssStyle['stats_skill_effeciency']}>+<strong>{this.state.skillBonus}</strong>% skill effeciency</div>
				<input ref="name" type="text" placeholder="Name" style={{'width':'280px'}}/>
				<br/>
				<div style={{width:'200px'}}>
					<span title="+ Physical Damage" style={cssStyle['attrLeft']}>Strengh</span>
					<span style={{
						'top': '70px',
						'font-size': '11px',
						'left': '69px',
						'position': 'absolute'
					}}>{this.state.val0}</span>
					<input min="1" max="10" title="+ Physical damage" style={cssStyle['sliderLeft']} ref="strengh" type="range" 
						onChange={function(e){this.updateVal('0',e.target.value);}.bind(this)}/>
					<span title="+ HP amount" style={cssStyle['attrLeft']}>Endurance</span>
					<span style={{
						'top': '96px',
						'font-size': '11px',
						'left': '69px',
						'position': 'absolute'
					}}>{this.state.val1}</span>
					<input min="1" max="10" title="+ HP amount"style={cssStyle['sliderLeft']} ref="endurance" type="range" 
						onChange={function(e){this.updateVal('1',e.target.value);}.bind(this)}/>
					<span title="+ Will objectamount" style={cssStyle['attrLeft']}>Willpower</span>
					<span style={{
						'top': '122px',
						'font-size': '11px',
						'left': '69px',
						'position': 'absolute'
					}}>{this.state.val2}</span>
					<input min="1" max="10" title="+ Will amount" style={cssStyle['sliderLeft']} ref="willpower" type="range" 
						onChange={function(e){this.updateVal('2',e.target.value);}.bind(this)}/>
					<span title="+ Regen will" style={cssStyle['attrLeft']}>Focus</span>
					<span style={{
						'top': '148px',
						'font-size': '11px',
						'left': '69px',
						'position': 'absolute'
					}}>{this.state.val3}</span>
					<input min="1" max="10" title="+ Regen will" style={cssStyle['sliderLeft']} ref="focus" type="range" 
						onChange={function(e){this.updateVal('3',e.target.value);}.bind(this)}/>
					<span title="+ Skill effeciency" style={cssStyle['attrLeft']}>Training</span>
					<span style={{
						'top': '174px',
						'font-size': '11px',
						'left': '69px',
						'position': 'absolute'
					}}>{this.state.val4}</span>
					<input min="1" max="10" title="+ Skill effeciency" style={cssStyle['sliderLeft']} ref="training" type="range" 
						onChange={function(e){this.updateVal('4',e.target.value);}.bind(this)}/>
				</div>
				<div ref="avatarVisual" style={cssStyle['avatarVisual']}></div>
				<input type="color" style={cssStyle['colorPicker']} onChange={this.avatarColorChange}/>
				<input type="button" value="Back" onClick={AppActions.showHomeScreen} style={cssStyle['backButton']}/>
				<input type="button" value="Create" onClick={this.createCharacter} style={cssStyle['createButton']}/>
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

	avatarColorChange: function(e) {
		this.refs['avatarVisual'].getDOMNode().style.backgroundColor = e.target.value;
	},

	createCharacter: function() {
		var data = {};
		data['name']		= this.refs['name'].getDOMNode().value || '';
		data['hp']			= this.state.hp || null;
		data['will']		= this.state.will || null;
		data['willRegen']	= this.state.willRegen || null;
		data['damage']		= this.state.damage || null;
		data['skillBonus']	= this.state.skillBonus || null;
		data['strengh']		= this.state.val0 || null;
		data['endurance']	= this.state.val1 || null;
		data['willpower']	= this.state.val2 || null;
		data['focus']		= this.state.val3 || null;
		data['training']		= this.state.val4 || null;

		if(data['name'].length < 3) {
			AppActions.serverError('nameTooShort');
		} else if(
			data['hp'] === null ||
			data['will'] === null ||
			data['willRegen'] === null ||
			data['damage'] === null ||
			data['skillBonus'] === null ||
			data['strengh'] === null ||
			data['endurance'] === null ||
			data['willpower'] === null ||
			data['focus'] === null ||
			data['training'] === null
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
	'attrLeft' : {
		'width':'70px',
		'float':'left',
		'fontSize':'11px',
		'lineHeight':'20px',
		'clear':'both'
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
		'width':'115px',
		'height':'115px',
		'position':'absolute',
		'top':'71px',
		'right':'0px'
	},
	'colorPicker' : {
		'width':'35px',
		'height':'20px',
		'float':'left',
		'marginLeft':'5px'
	},
	'avatarVisual' : {
		'width':'50px',
		'height':'80px',
		'backgroundColor':'black',
		'float':'left'
	},
	'createButton' : {
		'position':'absolute',
		'bottom':'5px',
		'right':'5px'
	},
	'backButton' : {
		'position':'absolute',
		'bottom':'5px',
		'right':'65px'
	},
}

module.exports = CreateCharacterForm;