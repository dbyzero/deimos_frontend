var React = require('react');
var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore');
var Led = require('./Led.jsx');
var InputBox = require('./InputBox.jsx');
var MessageList = require('./MessageList.jsx');

var Main = React.createClass({
    mixins: [Reflux.connect(AppStore,'appStore')],

    render: function() {
        var show = {
            'display':'block'
        };
        var hide = {
            'display':'none'
        };
        return (
            <div style={{
                position:'fixed',
                top:'0px',
                left:'0px',
                backgroundColor:'#cccccc',
                padding:'10px',
                border:'1px solid grey',
                fontFamily:'sans-serif monospace'
            }}>
                <div>
                    <div style={{'padding':'0px 0 5px 0'}}>
                        <strong style={{'fontVariant':'small-caps','fontSize': '16px'}}>Firecamp</strong><br/>
                    </div>
                    Username : <strong>{this.state.appStore.username}</strong><br/>
                    Channel : <strong>{this.state.appStore.channel}</strong><br/>
                    Is connected : <Led connected={this.state.appStore.isConnected}/>
                    <button onClick={this.connect} style={this.state.appStore.isConnected ? hide : show}> connect </button>
                    <button onClick={this.disconnect} style={this.state.appStore.isConnected ? show : hide}> diconnect </button>
                </div>
                <div style={this.state.appStore.isConnected ? show : hide}>
                    <MessageList messages={this.state.appStore.messages}/>
                    <InputBox onSubmit={this.sendMessage}/>
                </div>
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
    },

    sendMessage: function(msg) {
        console.log(__filename + ' sendMessage '+ msg);
        this.state.appStore.socket.emit('message',{data:msg});
    }
});

module.exports = Main;