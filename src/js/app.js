/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');
var scrollRunner = require('./script/modules/scroll-watch/runner.js');
var testRunner = require('./script/modules/test/runner.js');
// var testModule = require('./script/modules/module_revealing.js');


var Application = function() {

    testRunner();
//   scrollRunner();

};


$(function() {
  new Application();
});
