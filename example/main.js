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
      <Polyselect ref="polyselect">
        <Polyoption name="opt-1" title="My select option" value="1" />
        <Polyoption name="opt-2" title="My second select option" value="2" />
        <Polyoption name="opt-3" title="My third select option" value="3" />
      </Polyselect>
    );
  }
});

React.render(<App/>, document.body);
