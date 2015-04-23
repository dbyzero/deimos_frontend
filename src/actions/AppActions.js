var Reflux = require('reflux');
var Config = require('../../Config');
var io = require('socket.io-client');

// Test actions
var Actions = Reflux.createActions([
    "init",
    "connect",
    "disconnect",
    "connected",
    "disconnected"
]);

var wsConnection = null;

Actions.init.listen(function(){
    Actions.connect();
});

Actions.connect.listen(function () {
    console.log( __filename + ' connect ' + arguments );
    if(wsConnection !== null) {
        wsConnection.connect();
    } else {
        wsConnection = io.connect(Config.jsonServer);
        wsConnection
            .on('connect',function(){
                Actions.connected();
            })
            .on('connect_error',function(){
                Actions.disconnected();
            });
    }
});

Actions.disconnect.listen(function () {
    console.log( __filename + ' disconnect ' + arguments );
    if((wsConnection !== null) && wsConnection.connected === true) {
        wsConnection.disconnect();
        Actions.disconnected();
    }
});

Actions.connected.listen(function () {
    console.log( __filename + ' connected ' + arguments );
});

Actions.disconnected.listen(function () {
    console.log( __filename + ' disconnected ' + arguments );
});

module.exports = Actions;