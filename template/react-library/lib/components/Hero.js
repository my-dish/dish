'use strict';

var React  = require('react');
// var assign = require('lodash.assign');

var h1  = React.DOM.h1;
var div = React.DOM.div;

var Hero = React.createClass({
  displayName: 'Hero',
  propTypes: {
    style: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {

    };
  },
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return div({
    }, h1({
      style: {
        color: '#3498db'
      }
    }, 'Hello :)'));
  }
});

module.exports = Hero;
