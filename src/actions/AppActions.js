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
    "chatHasNewMessage",
    "chatInit",
    "chatHasNewUserList",
    "chatToggle"
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

            //Chat purpose
            .on('chat.message',function(data){
                Actions.chatHasNewMessage(data);
            })
            .on('chat.newUserList',function(data){
                Actions.chatHasNewUserList(data);
            })
            .on('chat.welcome',function(data){
                Actions.chatInit(data);
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

Actions.chatHasNewMessage.listen(function (data) {
    console.log( __filename + ' chatHasNewMessage ' + data );
});

Actions.chatInit.listen(function (data) {
    console.log( __filename + ' chatInit ' + data );
});

Actions.chatHasNewUserList.listen(function (data) {
    console.log( __filename + ' chatHasNewUserList ' );
});

Actions.chatToggle.listen(function () {
    console.log( __filename + ' chatToggle ' );
});

module.exports = Actions;