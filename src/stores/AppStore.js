var Reflux = require('reflux');

var AppActions = require('../actions/AppActions.js');

var INITIAL_STATE = {
    'username':'n/a',
    'isConnected' : false,
    'messages': [],
    'socket': null,
    'channel':''
};

// App store
var state;
var AppStore = Reflux.createStore({
    listenables: AppActions,

    getInitialState:function () {
        return INITIAL_STATE;
    },

    init:function () {
        console.log(__filename + ' init ' + arguments);
        state = INITIAL_STATE;
    },

    onConnected: function(socket) {
        console.log(__filename + ' onConnect '+arguments)
        state.isConnected = true;
        state.socket = socket;
        this.trigger(state);
    },

    onDisconnected: function() {
        console.log(__filename + ' onDisconnect '+arguments)
        state.isConnected = false;
        state.username = "n/a";
        this.trigger(state);
    },

    onAddMessage: function(data) {
        console.log(__filename + ' addMessage '+arguments)
        state.messages.push(data);
        this.trigger(state);
    },

    onSetEnv: function(data) {
        console.log(__filename + ' addMessage '+arguments)
        state.username = data.username;
        state.channel = data.channel;
        this.trigger(state);
    },
});

module.exports = AppStore;