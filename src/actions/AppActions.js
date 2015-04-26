var Reflux = require('reflux');
var Config = require('../../Config');
var io = require('socket.io-client');

// Test actions
var Actions = Reflux.createActions([
    "init",
    "connect",
    "disconnect",
    "connected",
    "disconnected",
    "setEnv",
    "addMessage",
    "userDisconnected",
    "toggleReduce"
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
        wsConnection = io.connect(Config.serverUrl);
        wsConnection
            .on('connect',function(){
                Actions.connected(wsConnection);
            })
            .on('connect_error',function(){
                Actions.disconnected();
            })
            .on('message',function(data){
                Actions.addMessage(data);
            })
            .on('newUserList',function(data){
                Actions.userDisconnected(data);
            })
            .on('welcome',function(data){
                console.log(data);
                Actions.setEnv(data);
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

Actions.addMessage.listen(function (data) {
    console.log( __filename + ' addMessage ' + data );
});

Actions.setEnv.listen(function (data) {
    console.log( __filename + ' setName ' + data );
});

Actions.userDisconnected.listen(function (data) {
    console.log( __filename + ' userDisconnected ' );
});

Actions.toggleReduce.listen(function () {
    console.log( __filename + ' toggleReduce ' );
});

module.exports = Actions;