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
			val0:50,
			val1:50,
			val2:50,
			val3:50,
			val4:50
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
					>
					</Polygone>
				</div>
				<div style={cssStyle['stats_hp']}><strong>{100+this.state.val1 * 9}</strong> Maximum HP</div>
				<div style={cssStyle['stats_will']}><strong>{50+this.state.val2}</strong> Will (regen <strong>{1+this.state.val3/10}</strong>/s)</div>
				<div style={cssStyle['stats_physical_damage']}>+<strong>{this.state.val0}</strong>% physical damage</div>
				<div style={cssStyle['stats_skill_effeciency']}>+<strong>{2 * this.state.val4}</strong>% skill effeciency</div>
				<input ref="name" type="text" placeholder="Name" style={{'width':'280px'}}/>
				<br/>
				<div style={{width:'200px'}}>
					<span title="+ Physical Damage" style={cssStyle['attrLeft']}>Strengh</span>
					<input title="+ Physical damage" style={cssStyle['sliderLeft']} ref="strengh" type="range" 
						onChange={function(e){this.updateVal('0',e.target.value);}.bind(this)}/>
					<span title="+ HP amount" style={cssStyle['attrLeft']}>Endurance</span>
					<input title="+ HP amount"style={cssStyle['sliderLeft']} ref="endurance" type="range" 
						onChange={function(e){this.updateVal('1',e.target.value);}.bind(this)}/>
					<span title="+ Will objectamount" style={cssStyle['attrLeft']}>Willpower</span>
					<input title="+ Will amount" style={cssStyle['sliderLeft']} ref="willpower" type="range" 
						onChange={function(e){this.updateVal('2',e.target.value);}.bind(this)}/>
					<span title="+ Regen will" style={cssStyle['attrLeft']}>Focus</span>
					<input title="+ Regen will" style={cssStyle['sliderLeft']} ref="focus" type="range" 
						onChange={function(e){this.updateVal('3',e.target.value);}.bind(this)}/>
					<span title="+ Skill effeciency" style={cssStyle['attrLeft']}>Training</span>
					<input title="+ Skill effeciency" style={cssStyle['sliderLeft']} ref="training" type="range" 
						onChange={function(e){this.updateVal('4',e.target.value);}.bind(this)}/>
				</div>
				<div ref="avatarVisual" style={cssStyle['avatarVisual']}></div>
				<input type="color" style={cssStyle['colorPicker']} onChange={this.avatarColorChange}/>
				<input type="button" value="Back" onClick={AppActions.showHomeScreen} style={cssStyle['backButton']}/>
				<input type="button" value="Create" onClick={this.createAvatar} style={cssStyle['createButton']}/>
			</div>
		);
	},

	updateVal: function(idx,val) {
		var newState = {};
		newState['val'+idx] = parseInt(val);
		this.setState(newState);
	},

	avatarColorChange: function(e) {
		this.refs['avatarVisual'].getDOMNode().style.backgroundColor = e.target.value;
	},

	createAvatar: function() {
		//TODO
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
		'width':'100px'
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