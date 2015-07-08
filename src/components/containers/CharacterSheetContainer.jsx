var React = require('react');
var ReactPropTypes = React.PropTypes;
var Reflux = require('reflux');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions.js');

var CharacterSheetContainer = React.createClass({

	mixins: [
		Reflux.connect(AppStore, 'store'),
	],

	render: function() {
		var character = AppStore.getCurrentAvatar();
		return (
			<div id="puck-character-sheet-container-wrapper" style={{
					'top':(this.props.isHidden ? '-381px' : '0px'),
					'transitionTimingFunction': (this.props.isHidden ? 'linear' : 'cubic-bezier(1,1.67,.29,.65)')
				}}>
				<div id="puck-character-sheet-container-chain"></div>
				<div id="puck-character-sheet-container">
				<div style={cssStyle['leftBlock']}>
					<div style={cssStyle['inventorySlots']}>
						{this.renderInventorySlots(character)}
					</div>
					{this.renderStats(character)}
				</div>
				<div style={cssStyle['rightBlock']}>
					<div style={cssStyle['className']}>Citizen</div>
					{this.renderEquipment(character)}
					{this.renderSkills(character)}
				</div>
				</div>
			</div>
		);
	},

	renderInventorySlots: function(character) {
		character.inventory.length = Math.max(character.inventory.length,127);

		var inventory = [];
		for (var i = 0; i < character.inventory.length; i++) {
			inventory.push(
				<div key={i} style={cssStyle['inventorySlot']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(i)}
				</div>
			);
		};
		return inventory;
	},

	renderItem:function (id) {
		return (<div id={id} 
			style={{
				'width':'32px',
				'height':'32px',
				'backgroundImage':"url(http://localhost:1082/items.png)",
				'backgroundPositionX':parseInt(parseInt(Math.random() * 16) * 32)+'px',
				'backgroundPositionY':parseInt(parseInt(Math.random() * 95) * 32) +'px'
			}}
			draggable={true}
			onDragStart={this.onDragStart}
			onDragOver={this.onDragOverItem}
			onDrop={this.onDropOverItem}
		></div>);
	},

	onDragStart:function(e) {
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData("text/html", e.target.id);
	},

	onDragOverItem: function(e) {
		if (e.preventDefault) e.preventDefault(); // allows us to drop
		e.dataTransfer.dropEffect = 'move';
	},

	onDropOverItem: function(e) {
		e.preventDefault();
		var sourceDomId = e.dataTransfer.getData("text/html");
		var originalContent = document.getElementById(sourceDomId);
		var originalContainer = originalContent.parentNode;
		var targetContainer = e.target.parentNode;
		var targetContent = e.target;
		targetContainer.appendChild(originalContent);
		originalContainer.appendChild(targetContent);
		e.stopPropagation();
	},

	onDragOverContainer: function(e) {
		if (e.preventDefault) e.preventDefault(); // allows us to drop
		e.dataTransfer.dropEffect = 'move';
	},

	onDropOverContainer: function(e) {
		e.preventDefault();
		var sourceDomId = e.dataTransfer.getData("text/html");
		var originalContent = document.getElementById(sourceDomId);
		var targetContainer = e.target;
		targetContainer.appendChild(originalContent);
		e.stopPropagation();
	},

	renderStats: function(character) {
		return (<table style={cssStyle['table']}>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Kills</strong></td>
						<td>123</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Death</strong></td>
						<td>124</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Pixel</strong> travel</td>
						<td>123 345 345</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Attack</strong></td>
						<td>345 678</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Accurency</strong></td>
						<td>5%</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Damage Taken</strong></td>
						<td>1 235 433</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Damage Given</strong></td>
						<td>235 433</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Damage Heal</strong></td>
						<td>1234</td>
					</tr>
					<tr style={cssStyle['tableStatRow']}>
						<td><strong>Game played</strong></td>
						<td>200</td>
					</tr>
				</table>);
	},

	renderEquipment: function(character) {
		return (
			<div style={cssStyle['equipment']}>
				<div style={cssStyle['equipementSlotHead1']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1001)}
				</div>
				<div style={cssStyle['equipementSlotHead2']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1002)}
				</div>
				<div style={cssStyle['equipementSlotBody']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1003)}
				</div>
				<div style={cssStyle['equipementSlotHandL']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1004)}
				</div>
				<div style={cssStyle['equipementSlotHandR']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1005)}
				</div>
				<div
					style={cssStyle['equipementSlotFeet']}
					onDragOver={this.onDragOverContainer}
					onDrop={this.onDropOverContainer}
				>
					{this.renderItem(1006)}
				</div>
			</div>
		);
	},

	renderSkills: function(character) {
		return (
				<div style={cssStyle['skillBlock']}>
					<div style={cssStyle['clearLeft']}>
						<div style={cssStyle['skillSlot']}></div>
						<strong>First skill</strong><br/>
						N/A
					</div>
					<div style={cssStyle['clearLeft']}>
						<div style={cssStyle['skillSlot']}></div>
						<strong>Second skill</strong><br/>
						N/A
					</div>
					<div style={cssStyle['clearLeft']}>
						<div style={cssStyle['skillSlot']}></div>
						<strong>First passive</strong><br/>
						N/A
					</div>
					<div style={cssStyle['clearLeft']}>
						<div style={cssStyle['skillSlot']}></div>
						<strong>Second passive</strong><br/>
						N/A
					</div>
					<div style={cssStyle['clearLeft']}>
						<div style={cssStyle['skillSlot']}></div>
						<strong>Third passive</strong><br/>
						N/A
					</div>
				</div>
			);
	}
});

var cssStyle = {
	'item' : {
		'width':'32px',
		'height':'32px',
		'backgroundImage':"url(http://localhost:1082/items.png)"
	},
	'inventorySlots' : {
		'width':'244px',
		'height':'190px',
		'overflowY':'scroll',
		'marginLeft':'2px'
	},
	'inventorySlot' : {
		'width':'32px',
		'height':'32px',
		'border':'2px solid black',
		'float':'left',
		'margin':'1px',
	},
	'skillSlot' : {
		'width':'32px',
		'height':'32px',
		'float':'left',
		'margin':'-1px 5px 0px 0px ',
		'backgroundColor':'rgba(255,255,255,0.6)'
	},
	'leftBlock' : {
		'width':'254px',
		'height':'100%',
		'float':'left'
	},
	'rightBlock' : {
		'width':'165px',
		'height':'100%',
		'float':'right'
	},
	'clearLeft' : {
		'clear':'left'
	},
	'skillBlock' : {
		'position':'absolute',
		'bottom':'28px',
	},
	'table' : {
		'marginTop':'8px'
	},
	'tableStatRow' : {
		'lineHeight':'11px'
	},
	'className' : {
		'width':'100%',
		'fontSize':'14px',
		'fontWeight':'bold',
		'textAlign':'center'
	},
	'equipment': {
		'height':'129px',
		'width':'122px',
		'position':'absolute',
		'top':'67px',
		'right':'22px'
	},
	'equipementSlotHead1' : {
		'position':'absolute',
		'top':'4px',
		'left':'20px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'15px'
	},
	'equipementSlotHead2' : {
		'position':'absolute',
		'top':'4px',
		'right':'20px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'15px'
	},
	'equipementSlotBody' : {
		'position':'absolute',
		'top':'48px',
		'left':'43px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'0px'
	},
	'equipementSlotHandL' : {
		'position':'absolute',
		'top':'48px',
		'left':'0px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'0px'
	},
	'equipementSlotHandR' : {
		'position':'absolute',
		'top':'48px',
		'right':'0px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'0px'
	},
	'equipementSlotFeet' : {
		'position':'absolute',
		'bottom':'5px',
		'left':'43px',
		'width': '32px',
		'height': '32px',
		'border':'2px solid black',
		'backgroundColor':'rgba(255,255,255,0.6)',
		'borderRadius':'0px'
	}
}

module.exports = CharacterSheetContainer;