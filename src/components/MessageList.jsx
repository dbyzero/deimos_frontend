var React = require('react');
var ReactPropTypes = React.PropTypes;

var MessageList = React.createClass({
    propTypes : {
        messages:ReactPropTypes.array
    },
    render: function() {
        return (
            <div id="divToScroll" style={{
                'margin':'10px 0 10px 0',
                'height':'300px',
                'width':'100%',
                'backgroundColor':'#aaaaaa',
                'overflowY':'scroll'
            }}>
                {this.renderMessages(this.props.messages)}
            </div>
        );
    },
    renderMessages :function(messages) {
        var rendering = [];
        var keys = Object.keys(messages);
        for(var i=0;i<keys.length;i++) {
            rendering.push(<Message key={messages[keys[i]].id} data={messages[keys[i]]} />);
        }
        return rendering;
    },
    componentDidUpdate: function(e){
        this.getDOMNode().scrollTop = 50 * this.props.messages.length;
    }
});

var Message = React.createClass({
    render: function() {
        return (
            <div><strong>{this.props.data.username}</strong> : {this.props.data.message}</div>
        );
    }
});

module.exports = MessageList;