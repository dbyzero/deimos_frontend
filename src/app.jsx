var React = require('react');
var AppActions = require('./actions/AppActions');
var Main = require('./components/Main.jsx');

var run = function(){
	var domEnvId = '4596fb97f98c4683930281f25a241c32-puck-campfire';
	var exist = document.getElementById(domEnvId);
	if(exist !== null) return;
	var el = document.createElement('section');
	el.setAttribute('id',domEnvId);
	AppActions.init();
	React.render(<Main domElement={el}/>,el);
	document.body.appendChild(el);
}

//if we embbed in page
window.onload = run;

//if we load by bookmarklet
if(document.readyState === "complete") {
	run();
}