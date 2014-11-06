/** @jsx React.DOM */

var React = require('react'),
    ReactPolyselect = require('../src/javascripts/main'),
    Polyselect = ReactPolyselect.Polyselect,
    Polyoption = ReactPolyselect.Polyoption;

var App = React.createClass({

  submit: function() {
    alert("You selected the following values: "  + this.refs.polyselect.refs.polyselect.props.value)
  },

  render: function() {
    return (
      <div>
        <Polyselect ref="polyselect">
          <Polyoption title="My select option" value="1" />
          <Polyoption title="My second select option" value="2" />
          <Polyoption title="My third select option" value="3" />
        </Polyselect>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
});

React.render(<App/>, document.body);
