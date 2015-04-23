var React = require('react');
var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore');
var Led = require('./Led.jsx');

//Test compomemt
var Main = React.createClass({
    mixins: [Reflux.connect(AppStore,'appStore')],

    state: {
        connection:null
    },

    render: function() {
        return (
            <div style={{
                position:'fixed',
                top:'0px',
                left:'0px',
                backgroundColor:'#cccccc',
                padding:'10px',
                border:'1px solid grey'
            }}>
                <strong>Pluck panel control</strong>
                <div>Is connected : <Led connected={this.state.appStore.isConnected}/>
                </div>
                <button onClick={this.connect}> connect </button>
                <button onClick={this.disconnect}> diconnect </button>
            </div>
        );
    },

    connect: function() {
        //inject script connection
        // var elScript =  document.createElement('script');
        // elScript.setAttribute('src','http://localhost:1080/socket.io/socket.io.js');
        // this.props.domElement.appendChild(elScript);

        //make connection
        AppActions.connect();
    },

    disconnect: function() {
        AppActions.disconnect();
    }

});

module.exports = Main;