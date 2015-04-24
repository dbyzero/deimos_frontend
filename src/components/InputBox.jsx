var React = require('react');
var ReactPropTypes = React.PropTypes;

//Test compomemt
var InputBox = React.createClass({

   getInitialState: function() {
       return {
          value: '',
       }
    },

    render: function() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onChangeVal} value={this.state.value} />
                    <button type="submit" onClick={this.sendMessage}> Send message </button>
                </form>
            </div>
        );
    },

    onChangeVal: function(e) {
        this.setState({
            "value":""+e.target.value
        });
    },

    sendMessage: function(e) {
        if(this.state.value.length > 0) {
            this.props.onSubmit(this.state.value);
            this.setState({
                "value":""
            });
        };
        e.preventDefault();
    }
});

module.exports = InputBox;