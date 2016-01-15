var React = require('react');
var ReactDOM = require('react-dom');
var Griddle = require('griddle-react');
var _ = require('underscore');
require('../style/griddle');

var fakeData = _.range(1, 100).map(i => {
  return {
    "id": i,
    "name": `Name${i}`,
    "city": `Kapowsin${i}`,
    "state": `Hawaii${i}`,
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": i
  };
});

ReactDOM.render(<Griddle results={fakeData} useGriddleStyles={false}/>, document.getElementById('main'));
