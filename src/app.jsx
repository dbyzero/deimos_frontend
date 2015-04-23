var React = require('react');
var Main = require('./components/Main.jsx');

var run = function(){
	var el = document.createElement('section');
	React.render(<Main domElement={el}/>,el);
	document.body.appendChild(el);
}

//if we embbed in page
window.onload = run;

//if we load by nookmarklet
if(document.readyState === "complete") {
	console.log('domReady');
	run();
}